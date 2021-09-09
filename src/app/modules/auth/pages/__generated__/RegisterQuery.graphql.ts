/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RegisterInput = {
    name: string;
    lastname: string;
    email: string;
    password: string;
};
export type RegisterQueryVariables = {
    input: RegisterInput;
};
export type RegisterQueryResponse = {
    readonly register: {
        readonly accessToken: string;
    };
};
export type RegisterQuery = {
    readonly response: RegisterQueryResponse;
    readonly variables: RegisterQueryVariables;
};



/*
mutation RegisterQuery(
  $input: RegisterInput!
) {
  register(input: $input) {
    accessToken
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AuthCredentialsDto",
    "kind": "LinkedField",
    "name": "register",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessToken",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterQuery",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0a935434dcd328214584bbb902ee9d2d",
    "id": null,
    "metadata": {},
    "name": "RegisterQuery",
    "operationKind": "mutation",
    "text": "mutation RegisterQuery(\n  $input: RegisterInput!\n) {\n  register(input: $input) {\n    accessToken\n  }\n}\n"
  }
};
})();
(node as any).hash = '7b5818302578abb2e56f4df25a209b57';
export default node;
