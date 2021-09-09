import React, {useCallback, useEffect} from "react";
import {Button, PageHeader, Space, Table, Tag} from "antd";
import {fetchQuery, graphql} from "react-relay/hooks";
import {ListQuery} from "./__generated__/ListQuery.graphql";
import Relay from "core/relay";

export function List() {
    const refetch = useCallback(
        () => {
            // Load the query again using the same original variables.
            // Calling loadQuery will update the value of queryRef.
            fetchQuery<ListQuery>(
                Relay.environment,
                graphql`
                    query ListQuery($query: ArticleCategoryQuery!) {
                        articleCategories(query: $query) {
                            nodes {
                                id
                                slug
                                name
                                description
                                image
                                thumbnail
                                created
                                updated
                                parent {
                                    name
                                }
                                ancestors {
                                    name
                                }
                            }
                            totalNode
                            totalCount
                            hasNextPage
                        }
                    }
                `,
                {
                    query: {
                        offset: 0,
                        limit: 1,
                    },
                }
            ).subscribe({
                next: (data) => {
                    console.log("data", data);
                },
            });
        },
        [
            /* ... */
        ]
    );
    // useEffect(() => {
    //     fetchQuery<AppWhoAmIQuery>(
    //         Relay.environment,
    //         graphql`
    //             query AppWhoAmIQuery {
    //                 whoAmI {
    //                     id
    //                     name
    //                     lastname
    //                     email
    //                 }
    //             }
    //         `,
    //         {}
    //     ).subscribe({
    //         next: (data) => {
    //             const { whoAmI } = data;
    //             if (whoAmI) dispatch(setUser(whoAmI));
    //         },
    //     });
    // }, [dispatch]);
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Tags",
            key: "tags",
            dataIndex: "tags",
            render: (tags) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? "geekblue" : "green";
                        if (tag === "loser") {
                            color = "volcano";
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            tags: ["nice", "developer"],
        },
        {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            tags: ["loser"],
        },
        {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park",
            tags: ["cool", "teacher"],
        },
    ];
    console.log("run run");

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        refetch();
        // const test = useLazyLoadQuery<ListQuery>(
        //     graphql`
        //         query ListQuery($query: ArticleCategoryQuery!) {
        //             articleCategories(query: $query) {
        //                 nodes {
        //                     id
        //                     slug
        //                     name
        //                     description
        //                     image
        //                     thumbnail
        //                     created
        //                     updated
        //                     parent {
        //                         name
        //                     }
        //                     ancestors {
        //                         name
        //                     }
        //                 }
        //                 totalNode
        //                 totalCount
        //                 hasNextPage
        //             }
        //         }
        //     `,
        //     {
        //         query: {
        //             limit: 0,
        //             offset: 15,
        //         },
        //     },
        //     {fetchPolicy: "store-or-network"}
        // );
    };

    return (
        <div className={"container container-offset"}>
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Title"
                subTitle="This is a subtitle"
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>,
                ]}
            >
                <Table columns={columns} dataSource={data}/>
            </PageHeader>
        </div>
    );
}
