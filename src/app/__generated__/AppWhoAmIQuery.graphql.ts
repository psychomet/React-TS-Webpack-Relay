/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppWhoAmIQueryVariables = {};
export type AppWhoAmIQueryResponse = {
    readonly whoAmI: {
        readonly id: string;
        readonly name: string;
        readonly lastname: string;
        readonly email: string;
    };
};
export type AppWhoAmIQuery = {
    readonly response: AppWhoAmIQueryResponse;
    readonly variables: AppWhoAmIQueryVariables;
};



/*
query AppWhoAmIQuery {
  whoAmI {
    id
    name
    lastname
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserDto",
    "kind": "LinkedField",
    "name": "whoAmI",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastname",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppWhoAmIQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppWhoAmIQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a1936ae49cd1c2b3d39247ee5e6adf37",
    "id": null,
    "metadata": {},
    "name": "AppWhoAmIQuery",
    "operationKind": "query",
    "text": "query AppWhoAmIQuery {\n  whoAmI {\n    id\n    name\n    lastname\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = 'db7a7c7212586c3819ba017d322520f2';
export default node;
