
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sensor
 * 
 */
export type Sensor = $Result.DefaultSelection<Prisma.$SensorPayload>
/**
 * Model Reading
 * 
 */
export type Reading = $Result.DefaultSelection<Prisma.$ReadingPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.sensor`: Exposes CRUD operations for the **Sensor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sensors
    * const sensors = await prisma.sensor.findMany()
    * ```
    */
  get sensor(): Prisma.SensorDelegate<ExtArgs>;

  /**
   * `prisma.reading`: Exposes CRUD operations for the **Reading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Readings
    * const readings = await prisma.reading.findMany()
    * ```
    */
  get reading(): Prisma.ReadingDelegate<ExtArgs>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Sensor: 'Sensor',
    Reading: 'Reading',
    Alert: 'Alert',
    Setting: 'Setting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "sensor" | "reading" | "alert" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sensor: {
        payload: Prisma.$SensorPayload<ExtArgs>
        fields: Prisma.SensorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findFirst: {
            args: Prisma.SensorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findMany: {
            args: Prisma.SensorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          create: {
            args: Prisma.SensorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          createMany: {
            args: Prisma.SensorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          delete: {
            args: Prisma.SensorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          update: {
            args: Prisma.SensorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          deleteMany: {
            args: Prisma.SensorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SensorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          aggregate: {
            args: Prisma.SensorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensor>
          }
          groupBy: {
            args: Prisma.SensorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorCountArgs<ExtArgs>
            result: $Utils.Optional<SensorCountAggregateOutputType> | number
          }
        }
      }
      Reading: {
        payload: Prisma.$ReadingPayload<ExtArgs>
        fields: Prisma.ReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          findFirst: {
            args: Prisma.ReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          findMany: {
            args: Prisma.ReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>[]
          }
          create: {
            args: Prisma.ReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          createMany: {
            args: Prisma.ReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>[]
          }
          delete: {
            args: Prisma.ReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          update: {
            args: Prisma.ReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          deleteMany: {
            args: Prisma.ReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          aggregate: {
            args: Prisma.ReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReading>
          }
          groupBy: {
            args: Prisma.ReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReadingCountArgs<ExtArgs>
            result: $Utils.Optional<ReadingCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SensorCountOutputType
   */

  export type SensorCountOutputType = {
    readings: number
    alerts: number
  }

  export type SensorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | SensorCountOutputTypeCountReadingsArgs
    alerts?: boolean | SensorCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorCountOutputType
     */
    select?: SensorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingWhereInput
  }

  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: string
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: string
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Sensor
   */

  export type AggregateSensor = {
    _count: SensorCountAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  export type SensorMinAggregateOutputType = {
    id: string | null
    sensorCode: string | null
    name: string | null
    location: string | null
    plant: string | null
    isActive: boolean | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SensorMaxAggregateOutputType = {
    id: string | null
    sensorCode: string | null
    name: string | null
    location: string | null
    plant: string | null
    isActive: boolean | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SensorCountAggregateOutputType = {
    id: number
    sensorCode: number
    name: number
    location: number
    plant: number
    isActive: number
    lastSeenAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SensorMinAggregateInputType = {
    id?: true
    sensorCode?: true
    name?: true
    location?: true
    plant?: true
    isActive?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SensorMaxAggregateInputType = {
    id?: true
    sensorCode?: true
    name?: true
    location?: true
    plant?: true
    isActive?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SensorCountAggregateInputType = {
    id?: true
    sensorCode?: true
    name?: true
    location?: true
    plant?: true
    isActive?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SensorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensor to aggregate.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sensors
    **/
    _count?: true | SensorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorMaxAggregateInputType
  }

  export type GetSensorAggregateType<T extends SensorAggregateArgs> = {
        [P in keyof T & keyof AggregateSensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensor[P]>
      : GetScalarType<T[P], AggregateSensor[P]>
  }




  export type SensorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithAggregationInput | SensorOrderByWithAggregationInput[]
    by: SensorScalarFieldEnum[] | SensorScalarFieldEnum
    having?: SensorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorCountAggregateInputType | true
    _min?: SensorMinAggregateInputType
    _max?: SensorMaxAggregateInputType
  }

  export type SensorGroupByOutputType = {
    id: string
    sensorCode: string
    name: string
    location: string
    plant: string | null
    isActive: boolean
    lastSeenAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SensorCountAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  type GetSensorGroupByPayload<T extends SensorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorGroupByOutputType[P]>
            : GetScalarType<T[P], SensorGroupByOutputType[P]>
        }
      >
    >


  export type SensorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorCode?: boolean
    name?: boolean
    location?: boolean
    plant?: boolean
    isActive?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    readings?: boolean | Sensor$readingsArgs<ExtArgs>
    alerts?: boolean | Sensor$alertsArgs<ExtArgs>
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorCode?: boolean
    name?: boolean
    location?: boolean
    plant?: boolean
    isActive?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectScalar = {
    id?: boolean
    sensorCode?: boolean
    name?: boolean
    location?: boolean
    plant?: boolean
    isActive?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SensorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | Sensor$readingsArgs<ExtArgs>
    alerts?: boolean | Sensor$alertsArgs<ExtArgs>
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SensorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SensorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sensor"
    objects: {
      readings: Prisma.$ReadingPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sensorCode: string
      name: string
      location: string
      plant: string | null
      isActive: boolean
      lastSeenAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sensor"]>
    composites: {}
  }

  type SensorGetPayload<S extends boolean | null | undefined | SensorDefaultArgs> = $Result.GetResult<Prisma.$SensorPayload, S>

  type SensorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SensorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SensorCountAggregateInputType | true
    }

  export interface SensorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sensor'], meta: { name: 'Sensor' } }
    /**
     * Find zero or one Sensor that matches the filter.
     * @param {SensorFindUniqueArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorFindUniqueArgs>(args: SelectSubset<T, SensorFindUniqueArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sensor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SensorFindUniqueOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorFindFirstArgs>(args?: SelectSubset<T, SensorFindFirstArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sensors
     * const sensors = await prisma.sensor.findMany()
     * 
     * // Get first 10 Sensors
     * const sensors = await prisma.sensor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorWithIdOnly = await prisma.sensor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorFindManyArgs>(args?: SelectSubset<T, SensorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sensor.
     * @param {SensorCreateArgs} args - Arguments to create a Sensor.
     * @example
     * // Create one Sensor
     * const Sensor = await prisma.sensor.create({
     *   data: {
     *     // ... data to create a Sensor
     *   }
     * })
     * 
     */
    create<T extends SensorCreateArgs>(args: SelectSubset<T, SensorCreateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sensors.
     * @param {SensorCreateManyArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorCreateManyArgs>(args?: SelectSubset<T, SensorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sensors and returns the data saved in the database.
     * @param {SensorCreateManyAndReturnArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sensors and only return the `id`
     * const sensorWithIdOnly = await prisma.sensor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sensor.
     * @param {SensorDeleteArgs} args - Arguments to delete one Sensor.
     * @example
     * // Delete one Sensor
     * const Sensor = await prisma.sensor.delete({
     *   where: {
     *     // ... filter to delete one Sensor
     *   }
     * })
     * 
     */
    delete<T extends SensorDeleteArgs>(args: SelectSubset<T, SensorDeleteArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sensor.
     * @param {SensorUpdateArgs} args - Arguments to update one Sensor.
     * @example
     * // Update one Sensor
     * const sensor = await prisma.sensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorUpdateArgs>(args: SelectSubset<T, SensorUpdateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sensors.
     * @param {SensorDeleteManyArgs} args - Arguments to filter Sensors to delete.
     * @example
     * // Delete a few Sensors
     * const { count } = await prisma.sensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorDeleteManyArgs>(args?: SelectSubset<T, SensorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorUpdateManyArgs>(args: SelectSubset<T, SensorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sensor.
     * @param {SensorUpsertArgs} args - Arguments to update or create a Sensor.
     * @example
     * // Update or create a Sensor
     * const sensor = await prisma.sensor.upsert({
     *   create: {
     *     // ... data to create a Sensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sensor we want to update
     *   }
     * })
     */
    upsert<T extends SensorUpsertArgs>(args: SelectSubset<T, SensorUpsertArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorCountArgs} args - Arguments to filter Sensors to count.
     * @example
     * // Count the number of Sensors
     * const count = await prisma.sensor.count({
     *   where: {
     *     // ... the filter for the Sensors we want to count
     *   }
     * })
    **/
    count<T extends SensorCountArgs>(
      args?: Subset<T, SensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SensorAggregateArgs>(args: Subset<T, SensorAggregateArgs>): Prisma.PrismaPromise<GetSensorAggregateType<T>>

    /**
     * Group by Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorGroupByArgs['orderBy'] }
        : { orderBy?: SensorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SensorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sensor model
   */
  readonly fields: SensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    readings<T extends Sensor$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findMany"> | Null>
    alerts<T extends Sensor$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sensor model
   */ 
  interface SensorFieldRefs {
    readonly id: FieldRef<"Sensor", 'String'>
    readonly sensorCode: FieldRef<"Sensor", 'String'>
    readonly name: FieldRef<"Sensor", 'String'>
    readonly location: FieldRef<"Sensor", 'String'>
    readonly plant: FieldRef<"Sensor", 'String'>
    readonly isActive: FieldRef<"Sensor", 'Boolean'>
    readonly lastSeenAt: FieldRef<"Sensor", 'DateTime'>
    readonly createdAt: FieldRef<"Sensor", 'DateTime'>
    readonly updatedAt: FieldRef<"Sensor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sensor findUnique
   */
  export type SensorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findUniqueOrThrow
   */
  export type SensorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findFirst
   */
  export type SensorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findFirstOrThrow
   */
  export type SensorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findMany
   */
  export type SensorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensors to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor create
   */
  export type SensorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sensor.
     */
    data: XOR<SensorCreateInput, SensorUncheckedCreateInput>
  }

  /**
   * Sensor createMany
   */
  export type SensorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sensor createManyAndReturn
   */
  export type SensorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sensor update
   */
  export type SensorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sensor.
     */
    data: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
    /**
     * Choose, which Sensor to update.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor updateMany
   */
  export type SensorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput
  }

  /**
   * Sensor upsert
   */
  export type SensorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sensor to update in case it exists.
     */
    where: SensorWhereUniqueInput
    /**
     * In case the Sensor found by the `where` argument doesn't exist, create a new Sensor with this data.
     */
    create: XOR<SensorCreateInput, SensorUncheckedCreateInput>
    /**
     * In case the Sensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
  }

  /**
   * Sensor delete
   */
  export type SensorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter which Sensor to delete.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor deleteMany
   */
  export type SensorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensors to delete
     */
    where?: SensorWhereInput
  }

  /**
   * Sensor.readings
   */
  export type Sensor$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    where?: ReadingWhereInput
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    cursor?: ReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Sensor.alerts
   */
  export type Sensor$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Sensor without action
   */
  export type SensorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
  }


  /**
   * Model Reading
   */

  export type AggregateReading = {
    _count: ReadingCountAggregateOutputType | null
    _avg: ReadingAvgAggregateOutputType | null
    _sum: ReadingSumAggregateOutputType | null
    _min: ReadingMinAggregateOutputType | null
    _max: ReadingMaxAggregateOutputType | null
  }

  export type ReadingAvgAggregateOutputType = {
    soilMoisture: number | null
    temperature: number | null
  }

  export type ReadingSumAggregateOutputType = {
    soilMoisture: number | null
    temperature: number | null
  }

  export type ReadingMinAggregateOutputType = {
    id: string | null
    sensorId: string | null
    soilMoisture: number | null
    temperature: number | null
    recordedAt: Date | null
  }

  export type ReadingMaxAggregateOutputType = {
    id: string | null
    sensorId: string | null
    soilMoisture: number | null
    temperature: number | null
    recordedAt: Date | null
  }

  export type ReadingCountAggregateOutputType = {
    id: number
    sensorId: number
    soilMoisture: number
    temperature: number
    recordedAt: number
    _all: number
  }


  export type ReadingAvgAggregateInputType = {
    soilMoisture?: true
    temperature?: true
  }

  export type ReadingSumAggregateInputType = {
    soilMoisture?: true
    temperature?: true
  }

  export type ReadingMinAggregateInputType = {
    id?: true
    sensorId?: true
    soilMoisture?: true
    temperature?: true
    recordedAt?: true
  }

  export type ReadingMaxAggregateInputType = {
    id?: true
    sensorId?: true
    soilMoisture?: true
    temperature?: true
    recordedAt?: true
  }

  export type ReadingCountAggregateInputType = {
    id?: true
    sensorId?: true
    soilMoisture?: true
    temperature?: true
    recordedAt?: true
    _all?: true
  }

  export type ReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reading to aggregate.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Readings
    **/
    _count?: true | ReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadingMaxAggregateInputType
  }

  export type GetReadingAggregateType<T extends ReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReading[P]>
      : GetScalarType<T[P], AggregateReading[P]>
  }




  export type ReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingWhereInput
    orderBy?: ReadingOrderByWithAggregationInput | ReadingOrderByWithAggregationInput[]
    by: ReadingScalarFieldEnum[] | ReadingScalarFieldEnum
    having?: ReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadingCountAggregateInputType | true
    _avg?: ReadingAvgAggregateInputType
    _sum?: ReadingSumAggregateInputType
    _min?: ReadingMinAggregateInputType
    _max?: ReadingMaxAggregateInputType
  }

  export type ReadingGroupByOutputType = {
    id: string
    sensorId: string
    soilMoisture: number
    temperature: number
    recordedAt: Date
    _count: ReadingCountAggregateOutputType | null
    _avg: ReadingAvgAggregateOutputType | null
    _sum: ReadingSumAggregateOutputType | null
    _min: ReadingMinAggregateOutputType | null
    _max: ReadingMaxAggregateOutputType | null
  }

  type GetReadingGroupByPayload<T extends ReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadingGroupByOutputType[P]>
            : GetScalarType<T[P], ReadingGroupByOutputType[P]>
        }
      >
    >


  export type ReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorId?: boolean
    soilMoisture?: boolean
    temperature?: boolean
    recordedAt?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reading"]>

  export type ReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorId?: boolean
    soilMoisture?: boolean
    temperature?: boolean
    recordedAt?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reading"]>

  export type ReadingSelectScalar = {
    id?: boolean
    sensorId?: boolean
    soilMoisture?: boolean
    temperature?: boolean
    recordedAt?: boolean
  }

  export type ReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }
  export type ReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }

  export type $ReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reading"
    objects: {
      sensor: Prisma.$SensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sensorId: string
      soilMoisture: number
      temperature: number
      recordedAt: Date
    }, ExtArgs["result"]["reading"]>
    composites: {}
  }

  type ReadingGetPayload<S extends boolean | null | undefined | ReadingDefaultArgs> = $Result.GetResult<Prisma.$ReadingPayload, S>

  type ReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReadingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReadingCountAggregateInputType | true
    }

  export interface ReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reading'], meta: { name: 'Reading' } }
    /**
     * Find zero or one Reading that matches the filter.
     * @param {ReadingFindUniqueArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadingFindUniqueArgs>(args: SelectSubset<T, ReadingFindUniqueArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reading that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReadingFindUniqueOrThrowArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, ReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindFirstArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadingFindFirstArgs>(args?: SelectSubset<T, ReadingFindFirstArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindFirstOrThrowArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, ReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Readings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Readings
     * const readings = await prisma.reading.findMany()
     * 
     * // Get first 10 Readings
     * const readings = await prisma.reading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readingWithIdOnly = await prisma.reading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReadingFindManyArgs>(args?: SelectSubset<T, ReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reading.
     * @param {ReadingCreateArgs} args - Arguments to create a Reading.
     * @example
     * // Create one Reading
     * const Reading = await prisma.reading.create({
     *   data: {
     *     // ... data to create a Reading
     *   }
     * })
     * 
     */
    create<T extends ReadingCreateArgs>(args: SelectSubset<T, ReadingCreateArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Readings.
     * @param {ReadingCreateManyArgs} args - Arguments to create many Readings.
     * @example
     * // Create many Readings
     * const reading = await prisma.reading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReadingCreateManyArgs>(args?: SelectSubset<T, ReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Readings and returns the data saved in the database.
     * @param {ReadingCreateManyAndReturnArgs} args - Arguments to create many Readings.
     * @example
     * // Create many Readings
     * const reading = await prisma.reading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Readings and only return the `id`
     * const readingWithIdOnly = await prisma.reading.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, ReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reading.
     * @param {ReadingDeleteArgs} args - Arguments to delete one Reading.
     * @example
     * // Delete one Reading
     * const Reading = await prisma.reading.delete({
     *   where: {
     *     // ... filter to delete one Reading
     *   }
     * })
     * 
     */
    delete<T extends ReadingDeleteArgs>(args: SelectSubset<T, ReadingDeleteArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reading.
     * @param {ReadingUpdateArgs} args - Arguments to update one Reading.
     * @example
     * // Update one Reading
     * const reading = await prisma.reading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReadingUpdateArgs>(args: SelectSubset<T, ReadingUpdateArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Readings.
     * @param {ReadingDeleteManyArgs} args - Arguments to filter Readings to delete.
     * @example
     * // Delete a few Readings
     * const { count } = await prisma.reading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReadingDeleteManyArgs>(args?: SelectSubset<T, ReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Readings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Readings
     * const reading = await prisma.reading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReadingUpdateManyArgs>(args: SelectSubset<T, ReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reading.
     * @param {ReadingUpsertArgs} args - Arguments to update or create a Reading.
     * @example
     * // Update or create a Reading
     * const reading = await prisma.reading.upsert({
     *   create: {
     *     // ... data to create a Reading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reading we want to update
     *   }
     * })
     */
    upsert<T extends ReadingUpsertArgs>(args: SelectSubset<T, ReadingUpsertArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Readings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingCountArgs} args - Arguments to filter Readings to count.
     * @example
     * // Count the number of Readings
     * const count = await prisma.reading.count({
     *   where: {
     *     // ... the filter for the Readings we want to count
     *   }
     * })
    **/
    count<T extends ReadingCountArgs>(
      args?: Subset<T, ReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReadingAggregateArgs>(args: Subset<T, ReadingAggregateArgs>): Prisma.PrismaPromise<GetReadingAggregateType<T>>

    /**
     * Group by Reading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadingGroupByArgs['orderBy'] }
        : { orderBy?: ReadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reading model
   */
  readonly fields: ReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensor<T extends SensorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SensorDefaultArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reading model
   */ 
  interface ReadingFieldRefs {
    readonly id: FieldRef<"Reading", 'String'>
    readonly sensorId: FieldRef<"Reading", 'String'>
    readonly soilMoisture: FieldRef<"Reading", 'Float'>
    readonly temperature: FieldRef<"Reading", 'Float'>
    readonly recordedAt: FieldRef<"Reading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reading findUnique
   */
  export type ReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading findUniqueOrThrow
   */
  export type ReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading findFirst
   */
  export type ReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Readings.
     */
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Reading findFirstOrThrow
   */
  export type ReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Readings.
     */
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Reading findMany
   */
  export type ReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Readings to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Reading create
   */
  export type ReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a Reading.
     */
    data: XOR<ReadingCreateInput, ReadingUncheckedCreateInput>
  }

  /**
   * Reading createMany
   */
  export type ReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Readings.
     */
    data: ReadingCreateManyInput | ReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reading createManyAndReturn
   */
  export type ReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Readings.
     */
    data: ReadingCreateManyInput | ReadingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reading update
   */
  export type ReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a Reading.
     */
    data: XOR<ReadingUpdateInput, ReadingUncheckedUpdateInput>
    /**
     * Choose, which Reading to update.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading updateMany
   */
  export type ReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Readings.
     */
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyInput>
    /**
     * Filter which Readings to update
     */
    where?: ReadingWhereInput
  }

  /**
   * Reading upsert
   */
  export type ReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the Reading to update in case it exists.
     */
    where: ReadingWhereUniqueInput
    /**
     * In case the Reading found by the `where` argument doesn't exist, create a new Reading with this data.
     */
    create: XOR<ReadingCreateInput, ReadingUncheckedCreateInput>
    /**
     * In case the Reading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadingUpdateInput, ReadingUncheckedUpdateInput>
  }

  /**
   * Reading delete
   */
  export type ReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter which Reading to delete.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading deleteMany
   */
  export type ReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Readings to delete
     */
    where?: ReadingWhereInput
  }

  /**
   * Reading without action
   */
  export type ReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    value: number | null
    threshold: number | null
  }

  export type AlertSumAggregateOutputType = {
    value: number | null
    threshold: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    sensorId: string | null
    type: string | null
    value: number | null
    threshold: number | null
    message: string | null
    severity: string | null
    status: string | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    sensorId: string | null
    type: string | null
    value: number | null
    threshold: number | null
    message: string | null
    severity: string | null
    status: string | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    sensorId: number
    type: number
    value: number
    threshold: number
    message: number
    severity: number
    status: number
    createdAt: number
    resolvedAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    value?: true
    threshold?: true
  }

  export type AlertSumAggregateInputType = {
    value?: true
    threshold?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    sensorId?: true
    type?: true
    value?: true
    threshold?: true
    message?: true
    severity?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    sensorId?: true
    type?: true
    value?: true
    threshold?: true
    message?: true
    severity?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    sensorId?: true
    type?: true
    value?: true
    threshold?: true
    message?: true
    severity?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    sensorId: string
    type: string
    value: number | null
    threshold: number | null
    message: string
    severity: string
    status: string
    createdAt: Date
    resolvedAt: Date | null
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorId?: boolean
    type?: boolean
    value?: boolean
    threshold?: boolean
    message?: boolean
    severity?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorId?: boolean
    type?: boolean
    value?: boolean
    threshold?: boolean
    message?: boolean
    severity?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    sensorId?: boolean
    type?: boolean
    value?: boolean
    threshold?: boolean
    message?: boolean
    severity?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }

  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      sensor: Prisma.$SensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sensorId: string
      type: string
      value: number | null
      threshold: number | null
      message: string
      severity: string
      status: string
      createdAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensor<T extends SensorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SensorDefaultArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */ 
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly sensorId: FieldRef<"Alert", 'String'>
    readonly type: FieldRef<"Alert", 'String'>
    readonly value: FieldRef<"Alert", 'Float'>
    readonly threshold: FieldRef<"Alert", 'Float'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly severity: FieldRef<"Alert", 'String'>
    readonly status: FieldRef<"Alert", 'String'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly resolvedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingAvgAggregateOutputType = {
    minSoilMoisture: number | null
    maxSoilMoisture: number | null
    minTemperature: number | null
    maxTemperature: number | null
    refreshIntervalSec: number | null
    offlineTimeoutSec: number | null
  }

  export type SettingSumAggregateOutputType = {
    minSoilMoisture: number | null
    maxSoilMoisture: number | null
    minTemperature: number | null
    maxTemperature: number | null
    refreshIntervalSec: number | null
    offlineTimeoutSec: number | null
  }

  export type SettingMinAggregateOutputType = {
    id: string | null
    minSoilMoisture: number | null
    maxSoilMoisture: number | null
    minTemperature: number | null
    maxTemperature: number | null
    refreshIntervalSec: number | null
    offlineTimeoutSec: number | null
    updatedAt: Date | null
  }

  export type SettingMaxAggregateOutputType = {
    id: string | null
    minSoilMoisture: number | null
    maxSoilMoisture: number | null
    minTemperature: number | null
    maxTemperature: number | null
    refreshIntervalSec: number | null
    offlineTimeoutSec: number | null
    updatedAt: Date | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    minSoilMoisture: number
    maxSoilMoisture: number
    minTemperature: number
    maxTemperature: number
    refreshIntervalSec: number
    offlineTimeoutSec: number
    updatedAt: number
    _all: number
  }


  export type SettingAvgAggregateInputType = {
    minSoilMoisture?: true
    maxSoilMoisture?: true
    minTemperature?: true
    maxTemperature?: true
    refreshIntervalSec?: true
    offlineTimeoutSec?: true
  }

  export type SettingSumAggregateInputType = {
    minSoilMoisture?: true
    maxSoilMoisture?: true
    minTemperature?: true
    maxTemperature?: true
    refreshIntervalSec?: true
    offlineTimeoutSec?: true
  }

  export type SettingMinAggregateInputType = {
    id?: true
    minSoilMoisture?: true
    maxSoilMoisture?: true
    minTemperature?: true
    maxTemperature?: true
    refreshIntervalSec?: true
    offlineTimeoutSec?: true
    updatedAt?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    minSoilMoisture?: true
    maxSoilMoisture?: true
    minTemperature?: true
    maxTemperature?: true
    refreshIntervalSec?: true
    offlineTimeoutSec?: true
    updatedAt?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    minSoilMoisture?: true
    maxSoilMoisture?: true
    minTemperature?: true
    maxTemperature?: true
    refreshIntervalSec?: true
    offlineTimeoutSec?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _avg?: SettingAvgAggregateInputType
    _sum?: SettingSumAggregateInputType
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: string
    minSoilMoisture: number
    maxSoilMoisture: number
    minTemperature: number
    maxTemperature: number
    refreshIntervalSec: number
    offlineTimeoutSec: number
    updatedAt: Date
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    minSoilMoisture?: boolean
    maxSoilMoisture?: boolean
    minTemperature?: boolean
    maxTemperature?: boolean
    refreshIntervalSec?: boolean
    offlineTimeoutSec?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    minSoilMoisture?: boolean
    maxSoilMoisture?: boolean
    minTemperature?: boolean
    maxTemperature?: boolean
    refreshIntervalSec?: boolean
    offlineTimeoutSec?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    minSoilMoisture?: boolean
    maxSoilMoisture?: boolean
    minTemperature?: boolean
    maxTemperature?: boolean
    refreshIntervalSec?: boolean
    offlineTimeoutSec?: boolean
    updatedAt?: boolean
  }


  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      minSoilMoisture: number
      maxSoilMoisture: number
      minTemperature: number
      maxTemperature: number
      refreshIntervalSec: number
      offlineTimeoutSec: number
      updatedAt: Date
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */ 
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'String'>
    readonly minSoilMoisture: FieldRef<"Setting", 'Float'>
    readonly maxSoilMoisture: FieldRef<"Setting", 'Float'>
    readonly minTemperature: FieldRef<"Setting", 'Float'>
    readonly maxTemperature: FieldRef<"Setting", 'Float'>
    readonly refreshIntervalSec: FieldRef<"Setting", 'Int'>
    readonly offlineTimeoutSec: FieldRef<"Setting", 'Int'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SensorScalarFieldEnum: {
    id: 'id',
    sensorCode: 'sensorCode',
    name: 'name',
    location: 'location',
    plant: 'plant',
    isActive: 'isActive',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SensorScalarFieldEnum = (typeof SensorScalarFieldEnum)[keyof typeof SensorScalarFieldEnum]


  export const ReadingScalarFieldEnum: {
    id: 'id',
    sensorId: 'sensorId',
    soilMoisture: 'soilMoisture',
    temperature: 'temperature',
    recordedAt: 'recordedAt'
  };

  export type ReadingScalarFieldEnum = (typeof ReadingScalarFieldEnum)[keyof typeof ReadingScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    sensorId: 'sensorId',
    type: 'type',
    value: 'value',
    threshold: 'threshold',
    message: 'message',
    severity: 'severity',
    status: 'status',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    minSoilMoisture: 'minSoilMoisture',
    maxSoilMoisture: 'maxSoilMoisture',
    minTemperature: 'minTemperature',
    maxTemperature: 'maxTemperature',
    refreshIntervalSec: 'refreshIntervalSec',
    offlineTimeoutSec: 'offlineTimeoutSec',
    updatedAt: 'updatedAt'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SensorWhereInput = {
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    id?: StringFilter<"Sensor"> | string
    sensorCode?: StringFilter<"Sensor"> | string
    name?: StringFilter<"Sensor"> | string
    location?: StringFilter<"Sensor"> | string
    plant?: StringNullableFilter<"Sensor"> | string | null
    isActive?: BoolFilter<"Sensor"> | boolean
    lastSeenAt?: DateTimeNullableFilter<"Sensor"> | Date | string | null
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeFilter<"Sensor"> | Date | string
    readings?: ReadingListRelationFilter
    alerts?: AlertListRelationFilter
  }

  export type SensorOrderByWithRelationInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    name?: SortOrder
    location?: SortOrder
    plant?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    readings?: ReadingOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type SensorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sensorCode?: string
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    name?: StringFilter<"Sensor"> | string
    location?: StringFilter<"Sensor"> | string
    plant?: StringNullableFilter<"Sensor"> | string | null
    isActive?: BoolFilter<"Sensor"> | boolean
    lastSeenAt?: DateTimeNullableFilter<"Sensor"> | Date | string | null
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeFilter<"Sensor"> | Date | string
    readings?: ReadingListRelationFilter
    alerts?: AlertListRelationFilter
  }, "id" | "sensorCode">

  export type SensorOrderByWithAggregationInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    name?: SortOrder
    location?: SortOrder
    plant?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SensorCountOrderByAggregateInput
    _max?: SensorMaxOrderByAggregateInput
    _min?: SensorMinOrderByAggregateInput
  }

  export type SensorScalarWhereWithAggregatesInput = {
    AND?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    OR?: SensorScalarWhereWithAggregatesInput[]
    NOT?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sensor"> | string
    sensorCode?: StringWithAggregatesFilter<"Sensor"> | string
    name?: StringWithAggregatesFilter<"Sensor"> | string
    location?: StringWithAggregatesFilter<"Sensor"> | string
    plant?: StringNullableWithAggregatesFilter<"Sensor"> | string | null
    isActive?: BoolWithAggregatesFilter<"Sensor"> | boolean
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"Sensor"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sensor"> | Date | string
  }

  export type ReadingWhereInput = {
    AND?: ReadingWhereInput | ReadingWhereInput[]
    OR?: ReadingWhereInput[]
    NOT?: ReadingWhereInput | ReadingWhereInput[]
    id?: StringFilter<"Reading"> | string
    sensorId?: StringFilter<"Reading"> | string
    soilMoisture?: FloatFilter<"Reading"> | number
    temperature?: FloatFilter<"Reading"> | number
    recordedAt?: DateTimeFilter<"Reading"> | Date | string
    sensor?: XOR<SensorRelationFilter, SensorWhereInput>
  }

  export type ReadingOrderByWithRelationInput = {
    id?: SortOrder
    sensorId?: SortOrder
    soilMoisture?: SortOrder
    temperature?: SortOrder
    recordedAt?: SortOrder
    sensor?: SensorOrderByWithRelationInput
  }

  export type ReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReadingWhereInput | ReadingWhereInput[]
    OR?: ReadingWhereInput[]
    NOT?: ReadingWhereInput | ReadingWhereInput[]
    sensorId?: StringFilter<"Reading"> | string
    soilMoisture?: FloatFilter<"Reading"> | number
    temperature?: FloatFilter<"Reading"> | number
    recordedAt?: DateTimeFilter<"Reading"> | Date | string
    sensor?: XOR<SensorRelationFilter, SensorWhereInput>
  }, "id">

  export type ReadingOrderByWithAggregationInput = {
    id?: SortOrder
    sensorId?: SortOrder
    soilMoisture?: SortOrder
    temperature?: SortOrder
    recordedAt?: SortOrder
    _count?: ReadingCountOrderByAggregateInput
    _avg?: ReadingAvgOrderByAggregateInput
    _max?: ReadingMaxOrderByAggregateInput
    _min?: ReadingMinOrderByAggregateInput
    _sum?: ReadingSumOrderByAggregateInput
  }

  export type ReadingScalarWhereWithAggregatesInput = {
    AND?: ReadingScalarWhereWithAggregatesInput | ReadingScalarWhereWithAggregatesInput[]
    OR?: ReadingScalarWhereWithAggregatesInput[]
    NOT?: ReadingScalarWhereWithAggregatesInput | ReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reading"> | string
    sensorId?: StringWithAggregatesFilter<"Reading"> | string
    soilMoisture?: FloatWithAggregatesFilter<"Reading"> | number
    temperature?: FloatWithAggregatesFilter<"Reading"> | number
    recordedAt?: DateTimeWithAggregatesFilter<"Reading"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    sensorId?: StringFilter<"Alert"> | string
    type?: StringFilter<"Alert"> | string
    value?: FloatNullableFilter<"Alert"> | number | null
    threshold?: FloatNullableFilter<"Alert"> | number | null
    message?: StringFilter<"Alert"> | string
    severity?: StringFilter<"Alert"> | string
    status?: StringFilter<"Alert"> | string
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    sensor?: XOR<SensorRelationFilter, SensorWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    sensorId?: SortOrder
    type?: SortOrder
    value?: SortOrderInput | SortOrder
    threshold?: SortOrderInput | SortOrder
    message?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    sensor?: SensorOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    sensorId?: StringFilter<"Alert"> | string
    type?: StringFilter<"Alert"> | string
    value?: FloatNullableFilter<"Alert"> | number | null
    threshold?: FloatNullableFilter<"Alert"> | number | null
    message?: StringFilter<"Alert"> | string
    severity?: StringFilter<"Alert"> | string
    status?: StringFilter<"Alert"> | string
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    sensor?: XOR<SensorRelationFilter, SensorWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    sensorId?: SortOrder
    type?: SortOrder
    value?: SortOrderInput | SortOrder
    threshold?: SortOrderInput | SortOrder
    message?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    sensorId?: StringWithAggregatesFilter<"Alert"> | string
    type?: StringWithAggregatesFilter<"Alert"> | string
    value?: FloatNullableWithAggregatesFilter<"Alert"> | number | null
    threshold?: FloatNullableWithAggregatesFilter<"Alert"> | number | null
    message?: StringWithAggregatesFilter<"Alert"> | string
    severity?: StringWithAggregatesFilter<"Alert"> | string
    status?: StringWithAggregatesFilter<"Alert"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: StringFilter<"Setting"> | string
    minSoilMoisture?: FloatFilter<"Setting"> | number
    maxSoilMoisture?: FloatFilter<"Setting"> | number
    minTemperature?: FloatFilter<"Setting"> | number
    maxTemperature?: FloatFilter<"Setting"> | number
    refreshIntervalSec?: IntFilter<"Setting"> | number
    offlineTimeoutSec?: IntFilter<"Setting"> | number
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    minSoilMoisture?: SortOrder
    maxSoilMoisture?: SortOrder
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    refreshIntervalSec?: SortOrder
    offlineTimeoutSec?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    minSoilMoisture?: FloatFilter<"Setting"> | number
    maxSoilMoisture?: FloatFilter<"Setting"> | number
    minTemperature?: FloatFilter<"Setting"> | number
    maxTemperature?: FloatFilter<"Setting"> | number
    refreshIntervalSec?: IntFilter<"Setting"> | number
    offlineTimeoutSec?: IntFilter<"Setting"> | number
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }, "id">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    minSoilMoisture?: SortOrder
    maxSoilMoisture?: SortOrder
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    refreshIntervalSec?: SortOrder
    offlineTimeoutSec?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _avg?: SettingAvgOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
    _sum?: SettingSumOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setting"> | string
    minSoilMoisture?: FloatWithAggregatesFilter<"Setting"> | number
    maxSoilMoisture?: FloatWithAggregatesFilter<"Setting"> | number
    minTemperature?: FloatWithAggregatesFilter<"Setting"> | number
    maxTemperature?: FloatWithAggregatesFilter<"Setting"> | number
    refreshIntervalSec?: IntWithAggregatesFilter<"Setting"> | number
    offlineTimeoutSec?: IntWithAggregatesFilter<"Setting"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorCreateInput = {
    id?: string
    sensorCode: string
    name: string
    location: string
    plant?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: ReadingCreateNestedManyWithoutSensorInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateInput = {
    id?: string
    sensorCode: string
    name: string
    location: string
    plant?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: ReadingUncheckedCreateNestedManyWithoutSensorInput
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUpdateManyWithoutSensorNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUncheckedUpdateManyWithoutSensorNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorCreateManyInput = {
    id?: string
    sensorCode: string
    name: string
    location: string
    plant?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SensorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingCreateInput = {
    id?: string
    soilMoisture: number
    temperature: number
    recordedAt?: Date | string
    sensor: SensorCreateNestedOneWithoutReadingsInput
  }

  export type ReadingUncheckedCreateInput = {
    id?: string
    sensorId: string
    soilMoisture: number
    temperature: number
    recordedAt?: Date | string
  }

  export type ReadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    soilMoisture?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensor?: SensorUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type ReadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    soilMoisture?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingCreateManyInput = {
    id?: string
    sensorId: string
    soilMoisture: number
    temperature: number
    recordedAt?: Date | string
  }

  export type ReadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    soilMoisture?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    soilMoisture?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id?: string
    type: string
    value?: number | null
    threshold?: number | null
    message: string
    severity: string
    status?: string
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    sensor: SensorCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    sensorId: string
    type: string
    value?: number | null
    threshold?: number | null
    message: string
    severity: string
    status?: string
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sensor?: SensorUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertCreateManyInput = {
    id?: string
    sensorId: string
    type: string
    value?: number | null
    threshold?: number | null
    message: string
    severity: string
    status?: string
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettingCreateInput = {
    id?: string
    minSoilMoisture?: number
    maxSoilMoisture?: number
    minTemperature?: number
    maxTemperature?: number
    refreshIntervalSec?: number
    offlineTimeoutSec?: number
    updatedAt?: Date | string
  }

  export type SettingUncheckedCreateInput = {
    id?: string
    minSoilMoisture?: number
    maxSoilMoisture?: number
    minTemperature?: number
    maxTemperature?: number
    refreshIntervalSec?: number
    offlineTimeoutSec?: number
    updatedAt?: Date | string
  }

  export type SettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minSoilMoisture?: FloatFieldUpdateOperationsInput | number
    maxSoilMoisture?: FloatFieldUpdateOperationsInput | number
    minTemperature?: FloatFieldUpdateOperationsInput | number
    maxTemperature?: FloatFieldUpdateOperationsInput | number
    refreshIntervalSec?: IntFieldUpdateOperationsInput | number
    offlineTimeoutSec?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minSoilMoisture?: FloatFieldUpdateOperationsInput | number
    maxSoilMoisture?: FloatFieldUpdateOperationsInput | number
    minTemperature?: FloatFieldUpdateOperationsInput | number
    maxTemperature?: FloatFieldUpdateOperationsInput | number
    refreshIntervalSec?: IntFieldUpdateOperationsInput | number
    offlineTimeoutSec?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateManyInput = {
    id?: string
    minSoilMoisture?: number
    maxSoilMoisture?: number
    minTemperature?: number
    maxTemperature?: number
    refreshIntervalSec?: number
    offlineTimeoutSec?: number
    updatedAt?: Date | string
  }

  export type SettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    minSoilMoisture?: FloatFieldUpdateOperationsInput | number
    maxSoilMoisture?: FloatFieldUpdateOperationsInput | number
    minTemperature?: FloatFieldUpdateOperationsInput | number
    maxTemperature?: FloatFieldUpdateOperationsInput | number
    refreshIntervalSec?: IntFieldUpdateOperationsInput | number
    offlineTimeoutSec?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    minSoilMoisture?: FloatFieldUpdateOperationsInput | number
    maxSoilMoisture?: FloatFieldUpdateOperationsInput | number
    minTemperature?: FloatFieldUpdateOperationsInput | number
    maxTemperature?: FloatFieldUpdateOperationsInput | number
    refreshIntervalSec?: IntFieldUpdateOperationsInput | number
    offlineTimeoutSec?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReadingListRelationFilter = {
    every?: ReadingWhereInput
    some?: ReadingWhereInput
    none?: ReadingWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SensorCountOrderByAggregateInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    name?: SortOrder
    location?: SortOrder
    plant?: SortOrder
    isActive?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SensorMaxOrderByAggregateInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    name?: SortOrder
    location?: SortOrder
    plant?: SortOrder
    isActive?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SensorMinOrderByAggregateInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    name?: SortOrder
    location?: SortOrder
    plant?: SortOrder
    isActive?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SensorRelationFilter = {
    is?: SensorWhereInput
    isNot?: SensorWhereInput
  }

  export type ReadingCountOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    soilMoisture?: SortOrder
    temperature?: SortOrder
    recordedAt?: SortOrder
  }

  export type ReadingAvgOrderByAggregateInput = {
    soilMoisture?: SortOrder
    temperature?: SortOrder
  }

  export type ReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    soilMoisture?: SortOrder
    temperature?: SortOrder
    recordedAt?: SortOrder
  }

  export type ReadingMinOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    soilMoisture?: SortOrder
    temperature?: SortOrder
    recordedAt?: SortOrder
  }

  export type ReadingSumOrderByAggregateInput = {
    soilMoisture?: SortOrder
    temperature?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    threshold?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    value?: SortOrder
    threshold?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    threshold?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    threshold?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    value?: SortOrder
    threshold?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    minSoilMoisture?: SortOrder
    maxSoilMoisture?: SortOrder
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    refreshIntervalSec?: SortOrder
    offlineTimeoutSec?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingAvgOrderByAggregateInput = {
    minSoilMoisture?: SortOrder
    maxSoilMoisture?: SortOrder
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    refreshIntervalSec?: SortOrder
    offlineTimeoutSec?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    minSoilMoisture?: SortOrder
    maxSoilMoisture?: SortOrder
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    refreshIntervalSec?: SortOrder
    offlineTimeoutSec?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    minSoilMoisture?: SortOrder
    maxSoilMoisture?: SortOrder
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    refreshIntervalSec?: SortOrder
    offlineTimeoutSec?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingSumOrderByAggregateInput = {
    minSoilMoisture?: SortOrder
    maxSoilMoisture?: SortOrder
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    refreshIntervalSec?: SortOrder
    offlineTimeoutSec?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReadingCreateNestedManyWithoutSensorInput = {
    create?: XOR<ReadingCreateWithoutSensorInput, ReadingUncheckedCreateWithoutSensorInput> | ReadingCreateWithoutSensorInput[] | ReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutSensorInput | ReadingCreateOrConnectWithoutSensorInput[]
    createMany?: ReadingCreateManySensorInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutSensorInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type ReadingUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<ReadingCreateWithoutSensorInput, ReadingUncheckedCreateWithoutSensorInput> | ReadingCreateWithoutSensorInput[] | ReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutSensorInput | ReadingCreateOrConnectWithoutSensorInput[]
    createMany?: ReadingCreateManySensorInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReadingUpdateManyWithoutSensorNestedInput = {
    create?: XOR<ReadingCreateWithoutSensorInput, ReadingUncheckedCreateWithoutSensorInput> | ReadingCreateWithoutSensorInput[] | ReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutSensorInput | ReadingCreateOrConnectWithoutSensorInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutSensorInput | ReadingUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: ReadingCreateManySensorInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutSensorInput | ReadingUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutSensorInput | ReadingUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutSensorNestedInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSensorInput | AlertUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSensorInput | AlertUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSensorInput | AlertUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type ReadingUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<ReadingCreateWithoutSensorInput, ReadingUncheckedCreateWithoutSensorInput> | ReadingCreateWithoutSensorInput[] | ReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutSensorInput | ReadingCreateOrConnectWithoutSensorInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutSensorInput | ReadingUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: ReadingCreateManySensorInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutSensorInput | ReadingUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutSensorInput | ReadingUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSensorInput | AlertUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSensorInput | AlertUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSensorInput | AlertUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type SensorCreateNestedOneWithoutReadingsInput = {
    create?: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutReadingsInput
    connect?: SensorWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SensorUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutReadingsInput
    upsert?: SensorUpsertWithoutReadingsInput
    connect?: SensorWhereUniqueInput
    update?: XOR<XOR<SensorUpdateToOneWithWhereWithoutReadingsInput, SensorUpdateWithoutReadingsInput>, SensorUncheckedUpdateWithoutReadingsInput>
  }

  export type SensorCreateNestedOneWithoutAlertsInput = {
    create?: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutAlertsInput
    connect?: SensorWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SensorUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutAlertsInput
    upsert?: SensorUpsertWithoutAlertsInput
    connect?: SensorWhereUniqueInput
    update?: XOR<XOR<SensorUpdateToOneWithWhereWithoutAlertsInput, SensorUpdateWithoutAlertsInput>, SensorUncheckedUpdateWithoutAlertsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ReadingCreateWithoutSensorInput = {
    id?: string
    soilMoisture: number
    temperature: number
    recordedAt?: Date | string
  }

  export type ReadingUncheckedCreateWithoutSensorInput = {
    id?: string
    soilMoisture: number
    temperature: number
    recordedAt?: Date | string
  }

  export type ReadingCreateOrConnectWithoutSensorInput = {
    where: ReadingWhereUniqueInput
    create: XOR<ReadingCreateWithoutSensorInput, ReadingUncheckedCreateWithoutSensorInput>
  }

  export type ReadingCreateManySensorInputEnvelope = {
    data: ReadingCreateManySensorInput | ReadingCreateManySensorInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutSensorInput = {
    id?: string
    type: string
    value?: number | null
    threshold?: number | null
    message: string
    severity: string
    status?: string
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type AlertUncheckedCreateWithoutSensorInput = {
    id?: string
    type: string
    value?: number | null
    threshold?: number | null
    message: string
    severity: string
    status?: string
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type AlertCreateOrConnectWithoutSensorInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput>
  }

  export type AlertCreateManySensorInputEnvelope = {
    data: AlertCreateManySensorInput | AlertCreateManySensorInput[]
    skipDuplicates?: boolean
  }

  export type ReadingUpsertWithWhereUniqueWithoutSensorInput = {
    where: ReadingWhereUniqueInput
    update: XOR<ReadingUpdateWithoutSensorInput, ReadingUncheckedUpdateWithoutSensorInput>
    create: XOR<ReadingCreateWithoutSensorInput, ReadingUncheckedCreateWithoutSensorInput>
  }

  export type ReadingUpdateWithWhereUniqueWithoutSensorInput = {
    where: ReadingWhereUniqueInput
    data: XOR<ReadingUpdateWithoutSensorInput, ReadingUncheckedUpdateWithoutSensorInput>
  }

  export type ReadingUpdateManyWithWhereWithoutSensorInput = {
    where: ReadingScalarWhereInput
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyWithoutSensorInput>
  }

  export type ReadingScalarWhereInput = {
    AND?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
    OR?: ReadingScalarWhereInput[]
    NOT?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
    id?: StringFilter<"Reading"> | string
    sensorId?: StringFilter<"Reading"> | string
    soilMoisture?: FloatFilter<"Reading"> | number
    temperature?: FloatFilter<"Reading"> | number
    recordedAt?: DateTimeFilter<"Reading"> | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutSensorInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutSensorInput, AlertUncheckedUpdateWithoutSensorInput>
    create: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutSensorInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutSensorInput, AlertUncheckedUpdateWithoutSensorInput>
  }

  export type AlertUpdateManyWithWhereWithoutSensorInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutSensorInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    sensorId?: StringFilter<"Alert"> | string
    type?: StringFilter<"Alert"> | string
    value?: FloatNullableFilter<"Alert"> | number | null
    threshold?: FloatNullableFilter<"Alert"> | number | null
    message?: StringFilter<"Alert"> | string
    severity?: StringFilter<"Alert"> | string
    status?: StringFilter<"Alert"> | string
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
  }

  export type SensorCreateWithoutReadingsInput = {
    id?: string
    sensorCode: string
    name: string
    location: string
    plant?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutReadingsInput = {
    id?: string
    sensorCode: string
    name: string
    location: string
    plant?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutReadingsInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
  }

  export type SensorUpsertWithoutReadingsInput = {
    update: XOR<SensorUpdateWithoutReadingsInput, SensorUncheckedUpdateWithoutReadingsInput>
    create: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
    where?: SensorWhereInput
  }

  export type SensorUpdateToOneWithWhereWithoutReadingsInput = {
    where?: SensorWhereInput
    data: XOR<SensorUpdateWithoutReadingsInput, SensorUncheckedUpdateWithoutReadingsInput>
  }

  export type SensorUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorCreateWithoutAlertsInput = {
    id?: string
    sensorCode: string
    name: string
    location: string
    plant?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: ReadingCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutAlertsInput = {
    id?: string
    sensorCode: string
    name: string
    location: string
    plant?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: ReadingUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutAlertsInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
  }

  export type SensorUpsertWithoutAlertsInput = {
    update: XOR<SensorUpdateWithoutAlertsInput, SensorUncheckedUpdateWithoutAlertsInput>
    create: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
    where?: SensorWhereInput
  }

  export type SensorUpdateToOneWithWhereWithoutAlertsInput = {
    where?: SensorWhereInput
    data: XOR<SensorUpdateWithoutAlertsInput, SensorUncheckedUpdateWithoutAlertsInput>
  }

  export type SensorUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type ReadingCreateManySensorInput = {
    id?: string
    soilMoisture: number
    temperature: number
    recordedAt?: Date | string
  }

  export type AlertCreateManySensorInput = {
    id?: string
    type: string
    value?: number | null
    threshold?: number | null
    message: string
    severity: string
    status?: string
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type ReadingUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    soilMoisture?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingUncheckedUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    soilMoisture?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingUncheckedUpdateManyWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    soilMoisture?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SensorCountOutputTypeDefaultArgs instead
     */
    export type SensorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SensorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SensorDefaultArgs instead
     */
    export type SensorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SensorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReadingDefaultArgs instead
     */
    export type ReadingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReadingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlertDefaultArgs instead
     */
    export type AlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingDefaultArgs instead
     */
    export type SettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}