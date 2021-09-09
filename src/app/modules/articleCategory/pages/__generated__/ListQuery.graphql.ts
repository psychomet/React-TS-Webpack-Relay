/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ArticleCategoryQuery = {
    offset: number;
    limit: number;
    direction?: string | null;
    filter?: ArticleCategoryFilter | null;
};
export type ArticleCategoryFilter = {
    name?: string | null;
    isHierarchy?: boolean | null;
    parent?: string | null;
};
export type ListQueryVariables = {
    query: ArticleCategoryQuery;
};
export type ListQueryResponse = {
    readonly articleCategories: {
        readonly nodes: ReadonlyArray<{
            readonly id: string;
            readonly slug: string;
            readonly name: string;
            readonly description: string | null;
            readonly image: string;
            readonly thumbnail: string;
            readonly created: unknown;
            readonly updated: unknown;
            readonly parent: {
                readonly name: string;
            } | null;
            readonly ancestors: ReadonlyArray<{
                readonly name: string;
            }>;
        }> | null;
        readonly totalNode: number;
        readonly totalCount: number;
        readonly hasNextPage: boolean;
    };
};
export type ListQuery = {
    readonly response: ListQueryResponse;
    readonly variables: ListQueryVariables;
};



/*
query ListQuery(
  $query: ArticleCategoryQuery!
) {
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
        id
      }
      ancestors {
        name
        id
      }
    }
    totalNode
    totalCount
    hasNextPage
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "thumbnail",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updated",
  "storageKey": null
},
v10 = [
  (v4/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalNode",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v14 = [
  (v4/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PaginatedArticleCategory",
        "kind": "LinkedField",
        "name": "articleCategories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ArticleCategoryDto",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ArticleCategoryDto",
                "kind": "LinkedField",
                "name": "parent",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ArticleCategoryDto",
                "kind": "LinkedField",
                "name": "ancestors",
                "plural": true,
                "selections": (v10/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PaginatedArticleCategory",
        "kind": "LinkedField",
        "name": "articleCategories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ArticleCategoryDto",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ArticleCategoryDto",
                "kind": "LinkedField",
                "name": "parent",
                "plural": false,
                "selections": (v14/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ArticleCategoryDto",
                "kind": "LinkedField",
                "name": "ancestors",
                "plural": true,
                "selections": (v14/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cb4a77e460964061f4cabda848265843",
    "id": null,
    "metadata": {},
    "name": "ListQuery",
    "operationKind": "query",
    "text": "query ListQuery(\n  $query: ArticleCategoryQuery!\n) {\n  articleCategories(query: $query) {\n    nodes {\n      id\n      slug\n      name\n      description\n      image\n      thumbnail\n      created\n      updated\n      parent {\n        name\n        id\n      }\n      ancestors {\n        name\n        id\n      }\n    }\n    totalNode\n    totalCount\n    hasNextPage\n  }\n}\n"
  }
};
})();
(node as any).hash = '76ea667e04d3ca1ab197fdd23ef606c1';
export default node;
