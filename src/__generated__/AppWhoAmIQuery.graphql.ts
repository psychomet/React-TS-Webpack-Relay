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
    "cacheID": "4a6c6535e0f181cb5bfee675462eeeaa",
    "id": null,
    "metadata": {},
    "name": "AppWhoAmIQuery",
    "operationKind": "query",
    "text": "query AppWhoAmIQuery {\n  whoAmI {\n    id\n    name\n    lastname\n  }\n}\n"
  }
};
})();
(node as any).hash = '938b68245e1ecafe73d746a42ef4333a';
export default node;
