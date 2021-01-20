/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../context"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  MessageCreateManyWithoutRoomInput: { // input type
    connect?: NexusGenInputs['MessageWhereUniqueInput'][] | null; // [MessageWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['MessageCreateOrConnectWithoutroomInput'][] | null; // [MessageCreateOrConnectWithoutroomInput!]
    create?: NexusGenInputs['MessageCreateWithoutRoomInput'][] | null; // [MessageCreateWithoutRoomInput!]
  }
  MessageCreateManyWithoutUserInput: { // input type
    connect?: NexusGenInputs['MessageWhereUniqueInput'][] | null; // [MessageWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['MessageCreateOrConnectWithoutuserInput'][] | null; // [MessageCreateOrConnectWithoutuserInput!]
    create?: NexusGenInputs['MessageCreateWithoutUserInput'][] | null; // [MessageCreateWithoutUserInput!]
  }
  MessageCreateOrConnectWithoutroomInput: { // input type
    create: NexusGenInputs['MessageCreateWithoutRoomInput']; // MessageCreateWithoutRoomInput!
    where: NexusGenInputs['MessageWhereUniqueInput']; // MessageWhereUniqueInput!
  }
  MessageCreateOrConnectWithoutuserInput: { // input type
    create: NexusGenInputs['MessageCreateWithoutUserInput']; // MessageCreateWithoutUserInput!
    where: NexusGenInputs['MessageWhereUniqueInput']; // MessageWhereUniqueInput!
  }
  MessageCreateWithoutRoomInput: { // input type
    text: string; // String!
    user: NexusGenInputs['UserCreateOneWithoutMessageInput']; // UserCreateOneWithoutMessageInput!
  }
  MessageCreateWithoutUserInput: { // input type
    room: NexusGenInputs['RoomCreateOneWithoutMessagesInput']; // RoomCreateOneWithoutMessagesInput!
    text: string; // String!
  }
  MessageWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ProfileCreateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['ProfileWhereUniqueInput'] | null; // ProfileWhereUniqueInput
    connectOrCreate?: NexusGenInputs['ProfileCreateOrConnectWithoutuserInput'] | null; // ProfileCreateOrConnectWithoutuserInput
    create?: NexusGenInputs['ProfileCreateWithoutUserInput'] | null; // ProfileCreateWithoutUserInput
  }
  ProfileCreateOrConnectWithoutuserInput: { // input type
    create: NexusGenInputs['ProfileCreateWithoutUserInput']; // ProfileCreateWithoutUserInput!
    where: NexusGenInputs['ProfileWhereUniqueInput']; // ProfileWhereUniqueInput!
  }
  ProfileCreateWithoutUserInput: { // input type
    bio?: string | null; // String
  }
  ProfileWhereUniqueInput: { // input type
    id?: number | null; // Int
    userId?: number | null; // Int
  }
  RoomCreateOneWithoutMessagesInput: { // input type
    connect?: NexusGenInputs['RoomWhereUniqueInput'] | null; // RoomWhereUniqueInput
    connectOrCreate?: NexusGenInputs['RoomCreateOrConnectWithoutmessagesInput'] | null; // RoomCreateOrConnectWithoutmessagesInput
    create?: NexusGenInputs['RoomCreateWithoutMessagesInput'] | null; // RoomCreateWithoutMessagesInput
  }
  RoomCreateOneWithoutUsersInput: { // input type
    connect?: NexusGenInputs['RoomWhereUniqueInput'] | null; // RoomWhereUniqueInput
    connectOrCreate?: NexusGenInputs['RoomCreateOrConnectWithoutusersInput'] | null; // RoomCreateOrConnectWithoutusersInput
    create?: NexusGenInputs['RoomCreateWithoutUsersInput'] | null; // RoomCreateWithoutUsersInput
  }
  RoomCreateOrConnectWithoutmessagesInput: { // input type
    create: NexusGenInputs['RoomCreateWithoutMessagesInput']; // RoomCreateWithoutMessagesInput!
    where: NexusGenInputs['RoomWhereUniqueInput']; // RoomWhereUniqueInput!
  }
  RoomCreateOrConnectWithoutusersInput: { // input type
    create: NexusGenInputs['RoomCreateWithoutUsersInput']; // RoomCreateWithoutUsersInput!
    where: NexusGenInputs['RoomWhereUniqueInput']; // RoomWhereUniqueInput!
  }
  RoomCreateWithoutMessagesInput: { // input type
    name: string; // String!
    users?: NexusGenInputs['UserCreateManyWithoutRoomInput'] | null; // UserCreateManyWithoutRoomInput
  }
  RoomCreateWithoutUsersInput: { // input type
    messages?: NexusGenInputs['MessageCreateManyWithoutRoomInput'] | null; // MessageCreateManyWithoutRoomInput
    name: string; // String!
  }
  RoomWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  UserCreateInput: { // input type
    email: string; // String!
    Message?: NexusGenInputs['MessageCreateManyWithoutUserInput'] | null; // MessageCreateManyWithoutUserInput
    name?: string | null; // String
    profile?: NexusGenInputs['ProfileCreateOneWithoutUserInput'] | null; // ProfileCreateOneWithoutUserInput
    Room?: NexusGenInputs['RoomCreateOneWithoutUsersInput'] | null; // RoomCreateOneWithoutUsersInput
  }
  UserCreateManyWithoutRoomInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['UserCreateOrConnectWithoutRoomInput'][] | null; // [UserCreateOrConnectWithoutRoomInput!]
    create?: NexusGenInputs['UserCreateWithoutRoomInput'][] | null; // [UserCreateWithoutRoomInput!]
  }
  UserCreateOneWithoutMessageInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    connectOrCreate?: NexusGenInputs['UserCreateOrConnectWithoutMessageInput'] | null; // UserCreateOrConnectWithoutMessageInput
    create?: NexusGenInputs['UserCreateWithoutMessageInput'] | null; // UserCreateWithoutMessageInput
  }
  UserCreateOrConnectWithoutMessageInput: { // input type
    create: NexusGenInputs['UserCreateWithoutMessageInput']; // UserCreateWithoutMessageInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserCreateOrConnectWithoutRoomInput: { // input type
    create: NexusGenInputs['UserCreateWithoutRoomInput']; // UserCreateWithoutRoomInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserCreateWithoutMessageInput: { // input type
    email: string; // String!
    name?: string | null; // String
    profile?: NexusGenInputs['ProfileCreateOneWithoutUserInput'] | null; // ProfileCreateOneWithoutUserInput
    Room?: NexusGenInputs['RoomCreateOneWithoutUsersInput'] | null; // RoomCreateOneWithoutUsersInput
  }
  UserCreateWithoutRoomInput: { // input type
    email: string; // String!
    Message?: NexusGenInputs['MessageCreateManyWithoutUserInput'] | null; // MessageCreateManyWithoutUserInput
    name?: string | null; // String
    profile?: NexusGenInputs['ProfileCreateOneWithoutUserInput'] | null; // ProfileCreateOneWithoutUserInput
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  User: { // root type
    email?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    signupUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  User: { // field return type
    email: string | null; // String
    id: number | null; // Int
    name: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    signupUser: 'User'
  }
  Query: { // field return type name
    users: 'User'
  }
  User: { // field return type name
    email: 'String'
    id: 'Int'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    signupUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}