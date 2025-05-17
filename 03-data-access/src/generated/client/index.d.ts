
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
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Norm
 * 
 */
export type Norm = $Result.DefaultSelection<Prisma.$NormPayload>
/**
 * Model CompanyAuditor
 * 
 */
export type CompanyAuditor = $Result.DefaultSelection<Prisma.$CompanyAuditorPayload>
/**
 * Model Criterion
 * 
 */
export type Criterion = $Result.DefaultSelection<Prisma.$CriterionPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Evaluation
 * 
 */
export type Evaluation = $Result.DefaultSelection<Prisma.$EvaluationPayload>
/**
 * Model EvaluationVersion
 * 
 */
export type EvaluationVersion = $Result.DefaultSelection<Prisma.$EvaluationVersionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Evidence
 * 
 */
export type Evidence = $Result.DefaultSelection<Prisma.$EvidencePayload>
/**
 * Model EvaluationFrequencyConfig
 * 
 */
export type EvaluationFrequencyConfig = $Result.DefaultSelection<Prisma.$EvaluationFrequencyConfigPayload>

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.norm`: Exposes CRUD operations for the **Norm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Norms
    * const norms = await prisma.norm.findMany()
    * ```
    */
  get norm(): Prisma.NormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyAuditor`: Exposes CRUD operations for the **CompanyAuditor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyAuditors
    * const companyAuditors = await prisma.companyAuditor.findMany()
    * ```
    */
  get companyAuditor(): Prisma.CompanyAuditorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.criterion`: Exposes CRUD operations for the **Criterion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Criteria
    * const criteria = await prisma.criterion.findMany()
    * ```
    */
  get criterion(): Prisma.CriterionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluation`: Exposes CRUD operations for the **Evaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluations
    * const evaluations = await prisma.evaluation.findMany()
    * ```
    */
  get evaluation(): Prisma.EvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluationVersion`: Exposes CRUD operations for the **EvaluationVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvaluationVersions
    * const evaluationVersions = await prisma.evaluationVersion.findMany()
    * ```
    */
  get evaluationVersion(): Prisma.EvaluationVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evidence`: Exposes CRUD operations for the **Evidence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evidences
    * const evidences = await prisma.evidence.findMany()
    * ```
    */
  get evidence(): Prisma.EvidenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluationFrequencyConfig`: Exposes CRUD operations for the **EvaluationFrequencyConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvaluationFrequencyConfigs
    * const evaluationFrequencyConfigs = await prisma.evaluationFrequencyConfig.findMany()
    * ```
    */
  get evaluationFrequencyConfig(): Prisma.EvaluationFrequencyConfigDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Company: 'Company',
    Norm: 'Norm',
    CompanyAuditor: 'CompanyAuditor',
    Criterion: 'Criterion',
    Question: 'Question',
    Evaluation: 'Evaluation',
    EvaluationVersion: 'EvaluationVersion',
    Answer: 'Answer',
    Comment: 'Comment',
    Evidence: 'Evidence',
    EvaluationFrequencyConfig: 'EvaluationFrequencyConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "company" | "norm" | "companyAuditor" | "criterion" | "question" | "evaluation" | "evaluationVersion" | "answer" | "comment" | "evidence" | "evaluationFrequencyConfig"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Norm: {
        payload: Prisma.$NormPayload<ExtArgs>
        fields: Prisma.NormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload>
          }
          findFirst: {
            args: Prisma.NormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload>
          }
          findMany: {
            args: Prisma.NormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload>[]
          }
          create: {
            args: Prisma.NormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload>
          }
          createMany: {
            args: Prisma.NormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload>[]
          }
          delete: {
            args: Prisma.NormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload>
          }
          update: {
            args: Prisma.NormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload>
          }
          deleteMany: {
            args: Prisma.NormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload>[]
          }
          upsert: {
            args: Prisma.NormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormPayload>
          }
          aggregate: {
            args: Prisma.NormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNorm>
          }
          groupBy: {
            args: Prisma.NormGroupByArgs<ExtArgs>
            result: $Utils.Optional<NormGroupByOutputType>[]
          }
          count: {
            args: Prisma.NormCountArgs<ExtArgs>
            result: $Utils.Optional<NormCountAggregateOutputType> | number
          }
        }
      }
      CompanyAuditor: {
        payload: Prisma.$CompanyAuditorPayload<ExtArgs>
        fields: Prisma.CompanyAuditorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyAuditorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyAuditorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload>
          }
          findFirst: {
            args: Prisma.CompanyAuditorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyAuditorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload>
          }
          findMany: {
            args: Prisma.CompanyAuditorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload>[]
          }
          create: {
            args: Prisma.CompanyAuditorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload>
          }
          createMany: {
            args: Prisma.CompanyAuditorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyAuditorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload>[]
          }
          delete: {
            args: Prisma.CompanyAuditorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload>
          }
          update: {
            args: Prisma.CompanyAuditorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload>
          }
          deleteMany: {
            args: Prisma.CompanyAuditorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyAuditorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyAuditorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload>[]
          }
          upsert: {
            args: Prisma.CompanyAuditorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAuditorPayload>
          }
          aggregate: {
            args: Prisma.CompanyAuditorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyAuditor>
          }
          groupBy: {
            args: Prisma.CompanyAuditorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyAuditorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyAuditorCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyAuditorCountAggregateOutputType> | number
          }
        }
      }
      Criterion: {
        payload: Prisma.$CriterionPayload<ExtArgs>
        fields: Prisma.CriterionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CriterionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CriterionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload>
          }
          findFirst: {
            args: Prisma.CriterionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CriterionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload>
          }
          findMany: {
            args: Prisma.CriterionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload>[]
          }
          create: {
            args: Prisma.CriterionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload>
          }
          createMany: {
            args: Prisma.CriterionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CriterionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload>[]
          }
          delete: {
            args: Prisma.CriterionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload>
          }
          update: {
            args: Prisma.CriterionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload>
          }
          deleteMany: {
            args: Prisma.CriterionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CriterionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CriterionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload>[]
          }
          upsert: {
            args: Prisma.CriterionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriterionPayload>
          }
          aggregate: {
            args: Prisma.CriterionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCriterion>
          }
          groupBy: {
            args: Prisma.CriterionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CriterionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CriterionCountArgs<ExtArgs>
            result: $Utils.Optional<CriterionCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Evaluation: {
        payload: Prisma.$EvaluationPayload<ExtArgs>
        fields: Prisma.EvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findFirst: {
            args: Prisma.EvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findMany: {
            args: Prisma.EvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          create: {
            args: Prisma.EvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          createMany: {
            args: Prisma.EvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          delete: {
            args: Prisma.EvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          update: {
            args: Prisma.EvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          upsert: {
            args: Prisma.EvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          aggregate: {
            args: Prisma.EvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation>
          }
          groupBy: {
            args: Prisma.EvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationCountAggregateOutputType> | number
          }
        }
      }
      EvaluationVersion: {
        payload: Prisma.$EvaluationVersionPayload<ExtArgs>
        fields: Prisma.EvaluationVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload>
          }
          findFirst: {
            args: Prisma.EvaluationVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload>
          }
          findMany: {
            args: Prisma.EvaluationVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload>[]
          }
          create: {
            args: Prisma.EvaluationVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload>
          }
          createMany: {
            args: Prisma.EvaluationVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload>[]
          }
          delete: {
            args: Prisma.EvaluationVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload>
          }
          update: {
            args: Prisma.EvaluationVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload>[]
          }
          upsert: {
            args: Prisma.EvaluationVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationVersionPayload>
          }
          aggregate: {
            args: Prisma.EvaluationVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluationVersion>
          }
          groupBy: {
            args: Prisma.EvaluationVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationVersionCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationVersionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Evidence: {
        payload: Prisma.$EvidencePayload<ExtArgs>
        fields: Prisma.EvidenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvidenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvidenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          findFirst: {
            args: Prisma.EvidenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvidenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          findMany: {
            args: Prisma.EvidenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          create: {
            args: Prisma.EvidenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          createMany: {
            args: Prisma.EvidenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvidenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          delete: {
            args: Prisma.EvidenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          update: {
            args: Prisma.EvidenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          deleteMany: {
            args: Prisma.EvidenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvidenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvidenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          upsert: {
            args: Prisma.EvidenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          aggregate: {
            args: Prisma.EvidenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvidence>
          }
          groupBy: {
            args: Prisma.EvidenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvidenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvidenceCountArgs<ExtArgs>
            result: $Utils.Optional<EvidenceCountAggregateOutputType> | number
          }
        }
      }
      EvaluationFrequencyConfig: {
        payload: Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>
        fields: Prisma.EvaluationFrequencyConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationFrequencyConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationFrequencyConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload>
          }
          findFirst: {
            args: Prisma.EvaluationFrequencyConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationFrequencyConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload>
          }
          findMany: {
            args: Prisma.EvaluationFrequencyConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload>[]
          }
          create: {
            args: Prisma.EvaluationFrequencyConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload>
          }
          createMany: {
            args: Prisma.EvaluationFrequencyConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationFrequencyConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload>[]
          }
          delete: {
            args: Prisma.EvaluationFrequencyConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload>
          }
          update: {
            args: Prisma.EvaluationFrequencyConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationFrequencyConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationFrequencyConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationFrequencyConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload>[]
          }
          upsert: {
            args: Prisma.EvaluationFrequencyConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationFrequencyConfigPayload>
          }
          aggregate: {
            args: Prisma.EvaluationFrequencyConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluationFrequencyConfig>
          }
          groupBy: {
            args: Prisma.EvaluationFrequencyConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationFrequencyConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationFrequencyConfigCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationFrequencyConfigCountAggregateOutputType> | number
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
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    company?: CompanyOmit
    norm?: NormOmit
    companyAuditor?: CompanyAuditorOmit
    criterion?: CriterionOmit
    question?: QuestionOmit
    evaluation?: EvaluationOmit
    evaluationVersion?: EvaluationVersionOmit
    answer?: AnswerOmit
    comment?: CommentOmit
    evidence?: EvidenceOmit
    evaluationFrequencyConfig?: EvaluationFrequencyConfigOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    evaluations: number
    versionsCreated: number
    answers: number
    evidences: number
    comments: number
    companyAuditors: number
    frequencyConfigs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | UserCountOutputTypeCountEvaluationsArgs
    versionsCreated?: boolean | UserCountOutputTypeCountVersionsCreatedArgs
    answers?: boolean | UserCountOutputTypeCountAnswersArgs
    evidences?: boolean | UserCountOutputTypeCountEvidencesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    companyAuditors?: boolean | UserCountOutputTypeCountCompanyAuditorsArgs
    frequencyConfigs?: boolean | UserCountOutputTypeCountFrequencyConfigsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVersionsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationVersionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyAuditorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyAuditorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFrequencyConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationFrequencyConfigWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    evaluations: number
    editorUsers: number
    frequencyConfigs: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | CompanyCountOutputTypeCountEvaluationsArgs
    editorUsers?: boolean | CompanyCountOutputTypeCountEditorUsersArgs
    frequencyConfigs?: boolean | CompanyCountOutputTypeCountFrequencyConfigsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEditorUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyAuditorWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFrequencyConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationFrequencyConfigWhereInput
  }


  /**
   * Count Type NormCountOutputType
   */

  export type NormCountOutputType = {
    criteria: number
    evaluations: number
    frequencyConfigs: number
  }

  export type NormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criteria?: boolean | NormCountOutputTypeCountCriteriaArgs
    evaluations?: boolean | NormCountOutputTypeCountEvaluationsArgs
    frequencyConfigs?: boolean | NormCountOutputTypeCountFrequencyConfigsArgs
  }

  // Custom InputTypes
  /**
   * NormCountOutputType without action
   */
  export type NormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormCountOutputType
     */
    select?: NormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NormCountOutputType without action
   */
  export type NormCountOutputTypeCountCriteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CriterionWhereInput
  }

  /**
   * NormCountOutputType without action
   */
  export type NormCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * NormCountOutputType without action
   */
  export type NormCountOutputTypeCountFrequencyConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationFrequencyConfigWhereInput
  }


  /**
   * Count Type CriterionCountOutputType
   */

  export type CriterionCountOutputType = {
    questions: number
  }

  export type CriterionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | CriterionCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * CriterionCountOutputType without action
   */
  export type CriterionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CriterionCountOutputType
     */
    select?: CriterionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CriterionCountOutputType without action
   */
  export type CriterionCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type EvaluationCountOutputType
   */

  export type EvaluationCountOutputType = {
    versions: number
  }

  export type EvaluationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | EvaluationCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * EvaluationCountOutputType without action
   */
  export type EvaluationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationCountOutputType
     */
    select?: EvaluationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EvaluationCountOutputType without action
   */
  export type EvaluationCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationVersionWhereInput
  }


  /**
   * Count Type EvaluationVersionCountOutputType
   */

  export type EvaluationVersionCountOutputType = {
    answers: number
  }

  export type EvaluationVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | EvaluationVersionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * EvaluationVersionCountOutputType without action
   */
  export type EvaluationVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersionCountOutputType
     */
    select?: EvaluationVersionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EvaluationVersionCountOutputType without action
   */
  export type EvaluationVersionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    comments: number
    evidences: number
  }

  export type AnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | AnswerCountOutputTypeCountCommentsArgs
    evidences?: boolean | AnswerCountOutputTypeCountEvidencesArgs
  }

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountEvidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    evaluations?: boolean | User$evaluationsArgs<ExtArgs>
    versionsCreated?: boolean | User$versionsCreatedArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    evidences?: boolean | User$evidencesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    companyAuditors?: boolean | User$companyAuditorsArgs<ExtArgs>
    frequencyConfigs?: boolean | User$frequencyConfigsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | User$evaluationsArgs<ExtArgs>
    versionsCreated?: boolean | User$versionsCreatedArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    evidences?: boolean | User$evidencesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    companyAuditors?: boolean | User$companyAuditorsArgs<ExtArgs>
    frequencyConfigs?: boolean | User$frequencyConfigsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
      versionsCreated: Prisma.$EvaluationVersionPayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      evidences: Prisma.$EvidencePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      companyAuditors: Prisma.$CompanyAuditorPayload<ExtArgs>[]
      frequencyConfigs: Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluations<T extends User$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, User$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    versionsCreated<T extends User$versionsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$versionsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends User$answersArgs<ExtArgs> = {}>(args?: Subset<T, User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evidences<T extends User$evidencesArgs<ExtArgs> = {}>(args?: Subset<T, User$evidencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companyAuditors<T extends User$companyAuditorsArgs<ExtArgs> = {}>(args?: Subset<T, User$companyAuditorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    frequencyConfigs<T extends User$frequencyConfigsArgs<ExtArgs> = {}>(args?: Subset<T, User$frequencyConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.evaluations
   */
  export type User$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * User.versionsCreated
   */
  export type User$versionsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    where?: EvaluationVersionWhereInput
    orderBy?: EvaluationVersionOrderByWithRelationInput | EvaluationVersionOrderByWithRelationInput[]
    cursor?: EvaluationVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationVersionScalarFieldEnum | EvaluationVersionScalarFieldEnum[]
  }

  /**
   * User.answers
   */
  export type User$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * User.evidences
   */
  export type User$evidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    cursor?: EvidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.companyAuditors
   */
  export type User$companyAuditorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    where?: CompanyAuditorWhereInput
    orderBy?: CompanyAuditorOrderByWithRelationInput | CompanyAuditorOrderByWithRelationInput[]
    cursor?: CompanyAuditorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyAuditorScalarFieldEnum | CompanyAuditorScalarFieldEnum[]
  }

  /**
   * User.frequencyConfigs
   */
  export type User$frequencyConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    where?: EvaluationFrequencyConfigWhereInput
    orderBy?: EvaluationFrequencyConfigOrderByWithRelationInput | EvaluationFrequencyConfigOrderByWithRelationInput[]
    cursor?: EvaluationFrequencyConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationFrequencyConfigScalarFieldEnum | EvaluationFrequencyConfigScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    nit: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    nit: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    nit: number | null
    address: string | null
    contact_name: string | null
    contact_email: string | null
    phone: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nit: number | null
    address: string | null
    contact_name: string | null
    contact_email: string | null
    phone: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    nit: number
    address: number
    contact_name: number
    contact_email: number
    phone: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    nit?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    nit?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    nit?: true
    address?: true
    contact_name?: true
    contact_email?: true
    phone?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    nit?: true
    address?: true
    contact_name?: true
    contact_email?: true
    phone?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    nit?: true
    address?: true
    contact_name?: true
    contact_email?: true
    phone?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    nit: number
    address: string | null
    contact_name: string | null
    contact_email: string | null
    phone: string | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    contact_name?: boolean
    contact_email?: boolean
    phone?: boolean
    evaluations?: boolean | Company$evaluationsArgs<ExtArgs>
    editorUsers?: boolean | Company$editorUsersArgs<ExtArgs>
    frequencyConfigs?: boolean | Company$frequencyConfigsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    contact_name?: boolean
    contact_email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    contact_name?: boolean
    contact_email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    contact_name?: boolean
    contact_email?: boolean
    phone?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nit" | "address" | "contact_name" | "contact_email" | "phone", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | Company$evaluationsArgs<ExtArgs>
    editorUsers?: boolean | Company$editorUsersArgs<ExtArgs>
    frequencyConfigs?: boolean | Company$frequencyConfigsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
      editorUsers: Prisma.$CompanyAuditorPayload<ExtArgs>[]
      frequencyConfigs: Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nit: number
      address: string | null
      contact_name: string | null
      contact_email: string | null
      phone: string | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluations<T extends Company$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Company$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    editorUsers<T extends Company$editorUsersArgs<ExtArgs> = {}>(args?: Subset<T, Company$editorUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    frequencyConfigs<T extends Company$frequencyConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Company$frequencyConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly nit: FieldRef<"Company", 'Int'>
    readonly address: FieldRef<"Company", 'String'>
    readonly contact_name: FieldRef<"Company", 'String'>
    readonly contact_email: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.evaluations
   */
  export type Company$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Company.editorUsers
   */
  export type Company$editorUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    where?: CompanyAuditorWhereInput
    orderBy?: CompanyAuditorOrderByWithRelationInput | CompanyAuditorOrderByWithRelationInput[]
    cursor?: CompanyAuditorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyAuditorScalarFieldEnum | CompanyAuditorScalarFieldEnum[]
  }

  /**
   * Company.frequencyConfigs
   */
  export type Company$frequencyConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    where?: EvaluationFrequencyConfigWhereInput
    orderBy?: EvaluationFrequencyConfigOrderByWithRelationInput | EvaluationFrequencyConfigOrderByWithRelationInput[]
    cursor?: EvaluationFrequencyConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationFrequencyConfigScalarFieldEnum | EvaluationFrequencyConfigScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Norm
   */

  export type AggregateNorm = {
    _count: NormCountAggregateOutputType | null
    _avg: NormAvgAggregateOutputType | null
    _sum: NormSumAggregateOutputType | null
    _min: NormMinAggregateOutputType | null
    _max: NormMaxAggregateOutputType | null
  }

  export type NormAvgAggregateOutputType = {
    id: number | null
  }

  export type NormSumAggregateOutputType = {
    id: number | null
  }

  export type NormMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type NormMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type NormCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type NormAvgAggregateInputType = {
    id?: true
  }

  export type NormSumAggregateInputType = {
    id?: true
  }

  export type NormMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type NormMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type NormCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type NormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Norm to aggregate.
     */
    where?: NormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Norms to fetch.
     */
    orderBy?: NormOrderByWithRelationInput | NormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Norms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Norms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Norms
    **/
    _count?: true | NormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NormMaxAggregateInputType
  }

  export type GetNormAggregateType<T extends NormAggregateArgs> = {
        [P in keyof T & keyof AggregateNorm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNorm[P]>
      : GetScalarType<T[P], AggregateNorm[P]>
  }




  export type NormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NormWhereInput
    orderBy?: NormOrderByWithAggregationInput | NormOrderByWithAggregationInput[]
    by: NormScalarFieldEnum[] | NormScalarFieldEnum
    having?: NormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NormCountAggregateInputType | true
    _avg?: NormAvgAggregateInputType
    _sum?: NormSumAggregateInputType
    _min?: NormMinAggregateInputType
    _max?: NormMaxAggregateInputType
  }

  export type NormGroupByOutputType = {
    id: number
    code: string
    name: string | null
    _count: NormCountAggregateOutputType | null
    _avg: NormAvgAggregateOutputType | null
    _sum: NormSumAggregateOutputType | null
    _min: NormMinAggregateOutputType | null
    _max: NormMaxAggregateOutputType | null
  }

  type GetNormGroupByPayload<T extends NormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NormGroupByOutputType[P]>
            : GetScalarType<T[P], NormGroupByOutputType[P]>
        }
      >
    >


  export type NormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    criteria?: boolean | Norm$criteriaArgs<ExtArgs>
    evaluations?: boolean | Norm$evaluationsArgs<ExtArgs>
    frequencyConfigs?: boolean | Norm$frequencyConfigsArgs<ExtArgs>
    _count?: boolean | NormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["norm"]>

  export type NormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["norm"]>

  export type NormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["norm"]>

  export type NormSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type NormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name", ExtArgs["result"]["norm"]>
  export type NormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criteria?: boolean | Norm$criteriaArgs<ExtArgs>
    evaluations?: boolean | Norm$evaluationsArgs<ExtArgs>
    frequencyConfigs?: boolean | Norm$frequencyConfigsArgs<ExtArgs>
    _count?: boolean | NormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Norm"
    objects: {
      criteria: Prisma.$CriterionPayload<ExtArgs>[]
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
      frequencyConfigs: Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string | null
    }, ExtArgs["result"]["norm"]>
    composites: {}
  }

  type NormGetPayload<S extends boolean | null | undefined | NormDefaultArgs> = $Result.GetResult<Prisma.$NormPayload, S>

  type NormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NormCountAggregateInputType | true
    }

  export interface NormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Norm'], meta: { name: 'Norm' } }
    /**
     * Find zero or one Norm that matches the filter.
     * @param {NormFindUniqueArgs} args - Arguments to find a Norm
     * @example
     * // Get one Norm
     * const norm = await prisma.norm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NormFindUniqueArgs>(args: SelectSubset<T, NormFindUniqueArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Norm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NormFindUniqueOrThrowArgs} args - Arguments to find a Norm
     * @example
     * // Get one Norm
     * const norm = await prisma.norm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NormFindUniqueOrThrowArgs>(args: SelectSubset<T, NormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Norm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormFindFirstArgs} args - Arguments to find a Norm
     * @example
     * // Get one Norm
     * const norm = await prisma.norm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NormFindFirstArgs>(args?: SelectSubset<T, NormFindFirstArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Norm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormFindFirstOrThrowArgs} args - Arguments to find a Norm
     * @example
     * // Get one Norm
     * const norm = await prisma.norm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NormFindFirstOrThrowArgs>(args?: SelectSubset<T, NormFindFirstOrThrowArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Norms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Norms
     * const norms = await prisma.norm.findMany()
     * 
     * // Get first 10 Norms
     * const norms = await prisma.norm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const normWithIdOnly = await prisma.norm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NormFindManyArgs>(args?: SelectSubset<T, NormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Norm.
     * @param {NormCreateArgs} args - Arguments to create a Norm.
     * @example
     * // Create one Norm
     * const Norm = await prisma.norm.create({
     *   data: {
     *     // ... data to create a Norm
     *   }
     * })
     * 
     */
    create<T extends NormCreateArgs>(args: SelectSubset<T, NormCreateArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Norms.
     * @param {NormCreateManyArgs} args - Arguments to create many Norms.
     * @example
     * // Create many Norms
     * const norm = await prisma.norm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NormCreateManyArgs>(args?: SelectSubset<T, NormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Norms and returns the data saved in the database.
     * @param {NormCreateManyAndReturnArgs} args - Arguments to create many Norms.
     * @example
     * // Create many Norms
     * const norm = await prisma.norm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Norms and only return the `id`
     * const normWithIdOnly = await prisma.norm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NormCreateManyAndReturnArgs>(args?: SelectSubset<T, NormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Norm.
     * @param {NormDeleteArgs} args - Arguments to delete one Norm.
     * @example
     * // Delete one Norm
     * const Norm = await prisma.norm.delete({
     *   where: {
     *     // ... filter to delete one Norm
     *   }
     * })
     * 
     */
    delete<T extends NormDeleteArgs>(args: SelectSubset<T, NormDeleteArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Norm.
     * @param {NormUpdateArgs} args - Arguments to update one Norm.
     * @example
     * // Update one Norm
     * const norm = await prisma.norm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NormUpdateArgs>(args: SelectSubset<T, NormUpdateArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Norms.
     * @param {NormDeleteManyArgs} args - Arguments to filter Norms to delete.
     * @example
     * // Delete a few Norms
     * const { count } = await prisma.norm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NormDeleteManyArgs>(args?: SelectSubset<T, NormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Norms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Norms
     * const norm = await prisma.norm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NormUpdateManyArgs>(args: SelectSubset<T, NormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Norms and returns the data updated in the database.
     * @param {NormUpdateManyAndReturnArgs} args - Arguments to update many Norms.
     * @example
     * // Update many Norms
     * const norm = await prisma.norm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Norms and only return the `id`
     * const normWithIdOnly = await prisma.norm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NormUpdateManyAndReturnArgs>(args: SelectSubset<T, NormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Norm.
     * @param {NormUpsertArgs} args - Arguments to update or create a Norm.
     * @example
     * // Update or create a Norm
     * const norm = await prisma.norm.upsert({
     *   create: {
     *     // ... data to create a Norm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Norm we want to update
     *   }
     * })
     */
    upsert<T extends NormUpsertArgs>(args: SelectSubset<T, NormUpsertArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Norms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormCountArgs} args - Arguments to filter Norms to count.
     * @example
     * // Count the number of Norms
     * const count = await prisma.norm.count({
     *   where: {
     *     // ... the filter for the Norms we want to count
     *   }
     * })
    **/
    count<T extends NormCountArgs>(
      args?: Subset<T, NormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Norm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NormAggregateArgs>(args: Subset<T, NormAggregateArgs>): Prisma.PrismaPromise<GetNormAggregateType<T>>

    /**
     * Group by Norm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormGroupByArgs} args - Group by arguments.
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
      T extends NormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NormGroupByArgs['orderBy'] }
        : { orderBy?: NormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Norm model
   */
  readonly fields: NormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Norm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criteria<T extends Norm$criteriaArgs<ExtArgs> = {}>(args?: Subset<T, Norm$criteriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evaluations<T extends Norm$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Norm$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    frequencyConfigs<T extends Norm$frequencyConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Norm$frequencyConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Norm model
   */
  interface NormFieldRefs {
    readonly id: FieldRef<"Norm", 'Int'>
    readonly code: FieldRef<"Norm", 'String'>
    readonly name: FieldRef<"Norm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Norm findUnique
   */
  export type NormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormInclude<ExtArgs> | null
    /**
     * Filter, which Norm to fetch.
     */
    where: NormWhereUniqueInput
  }

  /**
   * Norm findUniqueOrThrow
   */
  export type NormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormInclude<ExtArgs> | null
    /**
     * Filter, which Norm to fetch.
     */
    where: NormWhereUniqueInput
  }

  /**
   * Norm findFirst
   */
  export type NormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormInclude<ExtArgs> | null
    /**
     * Filter, which Norm to fetch.
     */
    where?: NormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Norms to fetch.
     */
    orderBy?: NormOrderByWithRelationInput | NormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Norms.
     */
    cursor?: NormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Norms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Norms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Norms.
     */
    distinct?: NormScalarFieldEnum | NormScalarFieldEnum[]
  }

  /**
   * Norm findFirstOrThrow
   */
  export type NormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormInclude<ExtArgs> | null
    /**
     * Filter, which Norm to fetch.
     */
    where?: NormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Norms to fetch.
     */
    orderBy?: NormOrderByWithRelationInput | NormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Norms.
     */
    cursor?: NormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Norms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Norms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Norms.
     */
    distinct?: NormScalarFieldEnum | NormScalarFieldEnum[]
  }

  /**
   * Norm findMany
   */
  export type NormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormInclude<ExtArgs> | null
    /**
     * Filter, which Norms to fetch.
     */
    where?: NormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Norms to fetch.
     */
    orderBy?: NormOrderByWithRelationInput | NormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Norms.
     */
    cursor?: NormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Norms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Norms.
     */
    skip?: number
    distinct?: NormScalarFieldEnum | NormScalarFieldEnum[]
  }

  /**
   * Norm create
   */
  export type NormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormInclude<ExtArgs> | null
    /**
     * The data needed to create a Norm.
     */
    data: XOR<NormCreateInput, NormUncheckedCreateInput>
  }

  /**
   * Norm createMany
   */
  export type NormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Norms.
     */
    data: NormCreateManyInput | NormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Norm createManyAndReturn
   */
  export type NormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * The data used to create many Norms.
     */
    data: NormCreateManyInput | NormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Norm update
   */
  export type NormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormInclude<ExtArgs> | null
    /**
     * The data needed to update a Norm.
     */
    data: XOR<NormUpdateInput, NormUncheckedUpdateInput>
    /**
     * Choose, which Norm to update.
     */
    where: NormWhereUniqueInput
  }

  /**
   * Norm updateMany
   */
  export type NormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Norms.
     */
    data: XOR<NormUpdateManyMutationInput, NormUncheckedUpdateManyInput>
    /**
     * Filter which Norms to update
     */
    where?: NormWhereInput
    /**
     * Limit how many Norms to update.
     */
    limit?: number
  }

  /**
   * Norm updateManyAndReturn
   */
  export type NormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * The data used to update Norms.
     */
    data: XOR<NormUpdateManyMutationInput, NormUncheckedUpdateManyInput>
    /**
     * Filter which Norms to update
     */
    where?: NormWhereInput
    /**
     * Limit how many Norms to update.
     */
    limit?: number
  }

  /**
   * Norm upsert
   */
  export type NormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormInclude<ExtArgs> | null
    /**
     * The filter to search for the Norm to update in case it exists.
     */
    where: NormWhereUniqueInput
    /**
     * In case the Norm found by the `where` argument doesn't exist, create a new Norm with this data.
     */
    create: XOR<NormCreateInput, NormUncheckedCreateInput>
    /**
     * In case the Norm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NormUpdateInput, NormUncheckedUpdateInput>
  }

  /**
   * Norm delete
   */
  export type NormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormInclude<ExtArgs> | null
    /**
     * Filter which Norm to delete.
     */
    where: NormWhereUniqueInput
  }

  /**
   * Norm deleteMany
   */
  export type NormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Norms to delete
     */
    where?: NormWhereInput
    /**
     * Limit how many Norms to delete.
     */
    limit?: number
  }

  /**
   * Norm.criteria
   */
  export type Norm$criteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
    where?: CriterionWhereInput
    orderBy?: CriterionOrderByWithRelationInput | CriterionOrderByWithRelationInput[]
    cursor?: CriterionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CriterionScalarFieldEnum | CriterionScalarFieldEnum[]
  }

  /**
   * Norm.evaluations
   */
  export type Norm$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Norm.frequencyConfigs
   */
  export type Norm$frequencyConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    where?: EvaluationFrequencyConfigWhereInput
    orderBy?: EvaluationFrequencyConfigOrderByWithRelationInput | EvaluationFrequencyConfigOrderByWithRelationInput[]
    cursor?: EvaluationFrequencyConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationFrequencyConfigScalarFieldEnum | EvaluationFrequencyConfigScalarFieldEnum[]
  }

  /**
   * Norm without action
   */
  export type NormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norm
     */
    select?: NormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norm
     */
    omit?: NormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormInclude<ExtArgs> | null
  }


  /**
   * Model CompanyAuditor
   */

  export type AggregateCompanyAuditor = {
    _count: CompanyAuditorCountAggregateOutputType | null
    _avg: CompanyAuditorAvgAggregateOutputType | null
    _sum: CompanyAuditorSumAggregateOutputType | null
    _min: CompanyAuditorMinAggregateOutputType | null
    _max: CompanyAuditorMaxAggregateOutputType | null
  }

  export type CompanyAuditorAvgAggregateOutputType = {
    company_id: number | null
    user_id: number | null
  }

  export type CompanyAuditorSumAggregateOutputType = {
    company_id: number | null
    user_id: number | null
  }

  export type CompanyAuditorMinAggregateOutputType = {
    company_id: number | null
    user_id: number | null
  }

  export type CompanyAuditorMaxAggregateOutputType = {
    company_id: number | null
    user_id: number | null
  }

  export type CompanyAuditorCountAggregateOutputType = {
    company_id: number
    user_id: number
    _all: number
  }


  export type CompanyAuditorAvgAggregateInputType = {
    company_id?: true
    user_id?: true
  }

  export type CompanyAuditorSumAggregateInputType = {
    company_id?: true
    user_id?: true
  }

  export type CompanyAuditorMinAggregateInputType = {
    company_id?: true
    user_id?: true
  }

  export type CompanyAuditorMaxAggregateInputType = {
    company_id?: true
    user_id?: true
  }

  export type CompanyAuditorCountAggregateInputType = {
    company_id?: true
    user_id?: true
    _all?: true
  }

  export type CompanyAuditorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyAuditor to aggregate.
     */
    where?: CompanyAuditorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAuditors to fetch.
     */
    orderBy?: CompanyAuditorOrderByWithRelationInput | CompanyAuditorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyAuditorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAuditors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAuditors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyAuditors
    **/
    _count?: true | CompanyAuditorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAuditorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyAuditorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyAuditorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyAuditorMaxAggregateInputType
  }

  export type GetCompanyAuditorAggregateType<T extends CompanyAuditorAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyAuditor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyAuditor[P]>
      : GetScalarType<T[P], AggregateCompanyAuditor[P]>
  }




  export type CompanyAuditorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyAuditorWhereInput
    orderBy?: CompanyAuditorOrderByWithAggregationInput | CompanyAuditorOrderByWithAggregationInput[]
    by: CompanyAuditorScalarFieldEnum[] | CompanyAuditorScalarFieldEnum
    having?: CompanyAuditorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyAuditorCountAggregateInputType | true
    _avg?: CompanyAuditorAvgAggregateInputType
    _sum?: CompanyAuditorSumAggregateInputType
    _min?: CompanyAuditorMinAggregateInputType
    _max?: CompanyAuditorMaxAggregateInputType
  }

  export type CompanyAuditorGroupByOutputType = {
    company_id: number
    user_id: number
    _count: CompanyAuditorCountAggregateOutputType | null
    _avg: CompanyAuditorAvgAggregateOutputType | null
    _sum: CompanyAuditorSumAggregateOutputType | null
    _min: CompanyAuditorMinAggregateOutputType | null
    _max: CompanyAuditorMaxAggregateOutputType | null
  }

  type GetCompanyAuditorGroupByPayload<T extends CompanyAuditorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyAuditorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyAuditorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyAuditorGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyAuditorGroupByOutputType[P]>
        }
      >
    >


  export type CompanyAuditorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    user_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyAuditor"]>

  export type CompanyAuditorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    user_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyAuditor"]>

  export type CompanyAuditorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    user_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyAuditor"]>

  export type CompanyAuditorSelectScalar = {
    company_id?: boolean
    user_id?: boolean
  }

  export type CompanyAuditorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"company_id" | "user_id", ExtArgs["result"]["companyAuditor"]>
  export type CompanyAuditorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyAuditorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyAuditorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyAuditorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyAuditor"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      company_id: number
      user_id: number
    }, ExtArgs["result"]["companyAuditor"]>
    composites: {}
  }

  type CompanyAuditorGetPayload<S extends boolean | null | undefined | CompanyAuditorDefaultArgs> = $Result.GetResult<Prisma.$CompanyAuditorPayload, S>

  type CompanyAuditorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyAuditorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyAuditorCountAggregateInputType | true
    }

  export interface CompanyAuditorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyAuditor'], meta: { name: 'CompanyAuditor' } }
    /**
     * Find zero or one CompanyAuditor that matches the filter.
     * @param {CompanyAuditorFindUniqueArgs} args - Arguments to find a CompanyAuditor
     * @example
     * // Get one CompanyAuditor
     * const companyAuditor = await prisma.companyAuditor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyAuditorFindUniqueArgs>(args: SelectSubset<T, CompanyAuditorFindUniqueArgs<ExtArgs>>): Prisma__CompanyAuditorClient<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyAuditor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyAuditorFindUniqueOrThrowArgs} args - Arguments to find a CompanyAuditor
     * @example
     * // Get one CompanyAuditor
     * const companyAuditor = await prisma.companyAuditor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyAuditorFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyAuditorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyAuditorClient<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyAuditor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAuditorFindFirstArgs} args - Arguments to find a CompanyAuditor
     * @example
     * // Get one CompanyAuditor
     * const companyAuditor = await prisma.companyAuditor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyAuditorFindFirstArgs>(args?: SelectSubset<T, CompanyAuditorFindFirstArgs<ExtArgs>>): Prisma__CompanyAuditorClient<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyAuditor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAuditorFindFirstOrThrowArgs} args - Arguments to find a CompanyAuditor
     * @example
     * // Get one CompanyAuditor
     * const companyAuditor = await prisma.companyAuditor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyAuditorFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyAuditorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyAuditorClient<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyAuditors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAuditorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyAuditors
     * const companyAuditors = await prisma.companyAuditor.findMany()
     * 
     * // Get first 10 CompanyAuditors
     * const companyAuditors = await prisma.companyAuditor.findMany({ take: 10 })
     * 
     * // Only select the `company_id`
     * const companyAuditorWithCompany_idOnly = await prisma.companyAuditor.findMany({ select: { company_id: true } })
     * 
     */
    findMany<T extends CompanyAuditorFindManyArgs>(args?: SelectSubset<T, CompanyAuditorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyAuditor.
     * @param {CompanyAuditorCreateArgs} args - Arguments to create a CompanyAuditor.
     * @example
     * // Create one CompanyAuditor
     * const CompanyAuditor = await prisma.companyAuditor.create({
     *   data: {
     *     // ... data to create a CompanyAuditor
     *   }
     * })
     * 
     */
    create<T extends CompanyAuditorCreateArgs>(args: SelectSubset<T, CompanyAuditorCreateArgs<ExtArgs>>): Prisma__CompanyAuditorClient<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyAuditors.
     * @param {CompanyAuditorCreateManyArgs} args - Arguments to create many CompanyAuditors.
     * @example
     * // Create many CompanyAuditors
     * const companyAuditor = await prisma.companyAuditor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyAuditorCreateManyArgs>(args?: SelectSubset<T, CompanyAuditorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyAuditors and returns the data saved in the database.
     * @param {CompanyAuditorCreateManyAndReturnArgs} args - Arguments to create many CompanyAuditors.
     * @example
     * // Create many CompanyAuditors
     * const companyAuditor = await prisma.companyAuditor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyAuditors and only return the `company_id`
     * const companyAuditorWithCompany_idOnly = await prisma.companyAuditor.createManyAndReturn({
     *   select: { company_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyAuditorCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyAuditorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyAuditor.
     * @param {CompanyAuditorDeleteArgs} args - Arguments to delete one CompanyAuditor.
     * @example
     * // Delete one CompanyAuditor
     * const CompanyAuditor = await prisma.companyAuditor.delete({
     *   where: {
     *     // ... filter to delete one CompanyAuditor
     *   }
     * })
     * 
     */
    delete<T extends CompanyAuditorDeleteArgs>(args: SelectSubset<T, CompanyAuditorDeleteArgs<ExtArgs>>): Prisma__CompanyAuditorClient<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyAuditor.
     * @param {CompanyAuditorUpdateArgs} args - Arguments to update one CompanyAuditor.
     * @example
     * // Update one CompanyAuditor
     * const companyAuditor = await prisma.companyAuditor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyAuditorUpdateArgs>(args: SelectSubset<T, CompanyAuditorUpdateArgs<ExtArgs>>): Prisma__CompanyAuditorClient<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyAuditors.
     * @param {CompanyAuditorDeleteManyArgs} args - Arguments to filter CompanyAuditors to delete.
     * @example
     * // Delete a few CompanyAuditors
     * const { count } = await prisma.companyAuditor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyAuditorDeleteManyArgs>(args?: SelectSubset<T, CompanyAuditorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyAuditors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAuditorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyAuditors
     * const companyAuditor = await prisma.companyAuditor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyAuditorUpdateManyArgs>(args: SelectSubset<T, CompanyAuditorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyAuditors and returns the data updated in the database.
     * @param {CompanyAuditorUpdateManyAndReturnArgs} args - Arguments to update many CompanyAuditors.
     * @example
     * // Update many CompanyAuditors
     * const companyAuditor = await prisma.companyAuditor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyAuditors and only return the `company_id`
     * const companyAuditorWithCompany_idOnly = await prisma.companyAuditor.updateManyAndReturn({
     *   select: { company_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyAuditorUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyAuditorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyAuditor.
     * @param {CompanyAuditorUpsertArgs} args - Arguments to update or create a CompanyAuditor.
     * @example
     * // Update or create a CompanyAuditor
     * const companyAuditor = await prisma.companyAuditor.upsert({
     *   create: {
     *     // ... data to create a CompanyAuditor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyAuditor we want to update
     *   }
     * })
     */
    upsert<T extends CompanyAuditorUpsertArgs>(args: SelectSubset<T, CompanyAuditorUpsertArgs<ExtArgs>>): Prisma__CompanyAuditorClient<$Result.GetResult<Prisma.$CompanyAuditorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyAuditors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAuditorCountArgs} args - Arguments to filter CompanyAuditors to count.
     * @example
     * // Count the number of CompanyAuditors
     * const count = await prisma.companyAuditor.count({
     *   where: {
     *     // ... the filter for the CompanyAuditors we want to count
     *   }
     * })
    **/
    count<T extends CompanyAuditorCountArgs>(
      args?: Subset<T, CompanyAuditorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyAuditorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyAuditor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAuditorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAuditorAggregateArgs>(args: Subset<T, CompanyAuditorAggregateArgs>): Prisma.PrismaPromise<GetCompanyAuditorAggregateType<T>>

    /**
     * Group by CompanyAuditor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAuditorGroupByArgs} args - Group by arguments.
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
      T extends CompanyAuditorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyAuditorGroupByArgs['orderBy'] }
        : { orderBy?: CompanyAuditorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyAuditorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyAuditorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyAuditor model
   */
  readonly fields: CompanyAuditorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyAuditor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyAuditorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompanyAuditor model
   */
  interface CompanyAuditorFieldRefs {
    readonly company_id: FieldRef<"CompanyAuditor", 'Int'>
    readonly user_id: FieldRef<"CompanyAuditor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CompanyAuditor findUnique
   */
  export type CompanyAuditorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    /**
     * Filter, which CompanyAuditor to fetch.
     */
    where: CompanyAuditorWhereUniqueInput
  }

  /**
   * CompanyAuditor findUniqueOrThrow
   */
  export type CompanyAuditorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    /**
     * Filter, which CompanyAuditor to fetch.
     */
    where: CompanyAuditorWhereUniqueInput
  }

  /**
   * CompanyAuditor findFirst
   */
  export type CompanyAuditorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    /**
     * Filter, which CompanyAuditor to fetch.
     */
    where?: CompanyAuditorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAuditors to fetch.
     */
    orderBy?: CompanyAuditorOrderByWithRelationInput | CompanyAuditorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyAuditors.
     */
    cursor?: CompanyAuditorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAuditors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAuditors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyAuditors.
     */
    distinct?: CompanyAuditorScalarFieldEnum | CompanyAuditorScalarFieldEnum[]
  }

  /**
   * CompanyAuditor findFirstOrThrow
   */
  export type CompanyAuditorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    /**
     * Filter, which CompanyAuditor to fetch.
     */
    where?: CompanyAuditorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAuditors to fetch.
     */
    orderBy?: CompanyAuditorOrderByWithRelationInput | CompanyAuditorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyAuditors.
     */
    cursor?: CompanyAuditorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAuditors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAuditors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyAuditors.
     */
    distinct?: CompanyAuditorScalarFieldEnum | CompanyAuditorScalarFieldEnum[]
  }

  /**
   * CompanyAuditor findMany
   */
  export type CompanyAuditorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    /**
     * Filter, which CompanyAuditors to fetch.
     */
    where?: CompanyAuditorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAuditors to fetch.
     */
    orderBy?: CompanyAuditorOrderByWithRelationInput | CompanyAuditorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyAuditors.
     */
    cursor?: CompanyAuditorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAuditors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAuditors.
     */
    skip?: number
    distinct?: CompanyAuditorScalarFieldEnum | CompanyAuditorScalarFieldEnum[]
  }

  /**
   * CompanyAuditor create
   */
  export type CompanyAuditorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyAuditor.
     */
    data: XOR<CompanyAuditorCreateInput, CompanyAuditorUncheckedCreateInput>
  }

  /**
   * CompanyAuditor createMany
   */
  export type CompanyAuditorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyAuditors.
     */
    data: CompanyAuditorCreateManyInput | CompanyAuditorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyAuditor createManyAndReturn
   */
  export type CompanyAuditorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyAuditors.
     */
    data: CompanyAuditorCreateManyInput | CompanyAuditorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyAuditor update
   */
  export type CompanyAuditorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyAuditor.
     */
    data: XOR<CompanyAuditorUpdateInput, CompanyAuditorUncheckedUpdateInput>
    /**
     * Choose, which CompanyAuditor to update.
     */
    where: CompanyAuditorWhereUniqueInput
  }

  /**
   * CompanyAuditor updateMany
   */
  export type CompanyAuditorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyAuditors.
     */
    data: XOR<CompanyAuditorUpdateManyMutationInput, CompanyAuditorUncheckedUpdateManyInput>
    /**
     * Filter which CompanyAuditors to update
     */
    where?: CompanyAuditorWhereInput
    /**
     * Limit how many CompanyAuditors to update.
     */
    limit?: number
  }

  /**
   * CompanyAuditor updateManyAndReturn
   */
  export type CompanyAuditorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * The data used to update CompanyAuditors.
     */
    data: XOR<CompanyAuditorUpdateManyMutationInput, CompanyAuditorUncheckedUpdateManyInput>
    /**
     * Filter which CompanyAuditors to update
     */
    where?: CompanyAuditorWhereInput
    /**
     * Limit how many CompanyAuditors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyAuditor upsert
   */
  export type CompanyAuditorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyAuditor to update in case it exists.
     */
    where: CompanyAuditorWhereUniqueInput
    /**
     * In case the CompanyAuditor found by the `where` argument doesn't exist, create a new CompanyAuditor with this data.
     */
    create: XOR<CompanyAuditorCreateInput, CompanyAuditorUncheckedCreateInput>
    /**
     * In case the CompanyAuditor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyAuditorUpdateInput, CompanyAuditorUncheckedUpdateInput>
  }

  /**
   * CompanyAuditor delete
   */
  export type CompanyAuditorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
    /**
     * Filter which CompanyAuditor to delete.
     */
    where: CompanyAuditorWhereUniqueInput
  }

  /**
   * CompanyAuditor deleteMany
   */
  export type CompanyAuditorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyAuditors to delete
     */
    where?: CompanyAuditorWhereInput
    /**
     * Limit how many CompanyAuditors to delete.
     */
    limit?: number
  }

  /**
   * CompanyAuditor without action
   */
  export type CompanyAuditorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAuditor
     */
    select?: CompanyAuditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAuditor
     */
    omit?: CompanyAuditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAuditorInclude<ExtArgs> | null
  }


  /**
   * Model Criterion
   */

  export type AggregateCriterion = {
    _count: CriterionCountAggregateOutputType | null
    _avg: CriterionAvgAggregateOutputType | null
    _sum: CriterionSumAggregateOutputType | null
    _min: CriterionMinAggregateOutputType | null
    _max: CriterionMaxAggregateOutputType | null
  }

  export type CriterionAvgAggregateOutputType = {
    id: number | null
    norm_id: number | null
  }

  export type CriterionSumAggregateOutputType = {
    id: number | null
    norm_id: number | null
  }

  export type CriterionMinAggregateOutputType = {
    id: number | null
    description: string | null
    norm_id: number | null
  }

  export type CriterionMaxAggregateOutputType = {
    id: number | null
    description: string | null
    norm_id: number | null
  }

  export type CriterionCountAggregateOutputType = {
    id: number
    description: number
    norm_id: number
    _all: number
  }


  export type CriterionAvgAggregateInputType = {
    id?: true
    norm_id?: true
  }

  export type CriterionSumAggregateInputType = {
    id?: true
    norm_id?: true
  }

  export type CriterionMinAggregateInputType = {
    id?: true
    description?: true
    norm_id?: true
  }

  export type CriterionMaxAggregateInputType = {
    id?: true
    description?: true
    norm_id?: true
  }

  export type CriterionCountAggregateInputType = {
    id?: true
    description?: true
    norm_id?: true
    _all?: true
  }

  export type CriterionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Criterion to aggregate.
     */
    where?: CriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriterionOrderByWithRelationInput | CriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Criteria
    **/
    _count?: true | CriterionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CriterionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CriterionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CriterionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CriterionMaxAggregateInputType
  }

  export type GetCriterionAggregateType<T extends CriterionAggregateArgs> = {
        [P in keyof T & keyof AggregateCriterion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCriterion[P]>
      : GetScalarType<T[P], AggregateCriterion[P]>
  }




  export type CriterionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CriterionWhereInput
    orderBy?: CriterionOrderByWithAggregationInput | CriterionOrderByWithAggregationInput[]
    by: CriterionScalarFieldEnum[] | CriterionScalarFieldEnum
    having?: CriterionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CriterionCountAggregateInputType | true
    _avg?: CriterionAvgAggregateInputType
    _sum?: CriterionSumAggregateInputType
    _min?: CriterionMinAggregateInputType
    _max?: CriterionMaxAggregateInputType
  }

  export type CriterionGroupByOutputType = {
    id: number
    description: string | null
    norm_id: number
    _count: CriterionCountAggregateOutputType | null
    _avg: CriterionAvgAggregateOutputType | null
    _sum: CriterionSumAggregateOutputType | null
    _min: CriterionMinAggregateOutputType | null
    _max: CriterionMaxAggregateOutputType | null
  }

  type GetCriterionGroupByPayload<T extends CriterionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CriterionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CriterionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CriterionGroupByOutputType[P]>
            : GetScalarType<T[P], CriterionGroupByOutputType[P]>
        }
      >
    >


  export type CriterionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    norm_id?: boolean
    norm?: boolean | NormDefaultArgs<ExtArgs>
    questions?: boolean | Criterion$questionsArgs<ExtArgs>
    _count?: boolean | CriterionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["criterion"]>

  export type CriterionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    norm_id?: boolean
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["criterion"]>

  export type CriterionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    norm_id?: boolean
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["criterion"]>

  export type CriterionSelectScalar = {
    id?: boolean
    description?: boolean
    norm_id?: boolean
  }

  export type CriterionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "norm_id", ExtArgs["result"]["criterion"]>
  export type CriterionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    norm?: boolean | NormDefaultArgs<ExtArgs>
    questions?: boolean | Criterion$questionsArgs<ExtArgs>
    _count?: boolean | CriterionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CriterionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }
  export type CriterionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }

  export type $CriterionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Criterion"
    objects: {
      norm: Prisma.$NormPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string | null
      norm_id: number
    }, ExtArgs["result"]["criterion"]>
    composites: {}
  }

  type CriterionGetPayload<S extends boolean | null | undefined | CriterionDefaultArgs> = $Result.GetResult<Prisma.$CriterionPayload, S>

  type CriterionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CriterionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CriterionCountAggregateInputType | true
    }

  export interface CriterionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Criterion'], meta: { name: 'Criterion' } }
    /**
     * Find zero or one Criterion that matches the filter.
     * @param {CriterionFindUniqueArgs} args - Arguments to find a Criterion
     * @example
     * // Get one Criterion
     * const criterion = await prisma.criterion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CriterionFindUniqueArgs>(args: SelectSubset<T, CriterionFindUniqueArgs<ExtArgs>>): Prisma__CriterionClient<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Criterion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CriterionFindUniqueOrThrowArgs} args - Arguments to find a Criterion
     * @example
     * // Get one Criterion
     * const criterion = await prisma.criterion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CriterionFindUniqueOrThrowArgs>(args: SelectSubset<T, CriterionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CriterionClient<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criterion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriterionFindFirstArgs} args - Arguments to find a Criterion
     * @example
     * // Get one Criterion
     * const criterion = await prisma.criterion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CriterionFindFirstArgs>(args?: SelectSubset<T, CriterionFindFirstArgs<ExtArgs>>): Prisma__CriterionClient<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criterion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriterionFindFirstOrThrowArgs} args - Arguments to find a Criterion
     * @example
     * // Get one Criterion
     * const criterion = await prisma.criterion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CriterionFindFirstOrThrowArgs>(args?: SelectSubset<T, CriterionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CriterionClient<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Criteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriterionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Criteria
     * const criteria = await prisma.criterion.findMany()
     * 
     * // Get first 10 Criteria
     * const criteria = await prisma.criterion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const criterionWithIdOnly = await prisma.criterion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CriterionFindManyArgs>(args?: SelectSubset<T, CriterionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Criterion.
     * @param {CriterionCreateArgs} args - Arguments to create a Criterion.
     * @example
     * // Create one Criterion
     * const Criterion = await prisma.criterion.create({
     *   data: {
     *     // ... data to create a Criterion
     *   }
     * })
     * 
     */
    create<T extends CriterionCreateArgs>(args: SelectSubset<T, CriterionCreateArgs<ExtArgs>>): Prisma__CriterionClient<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Criteria.
     * @param {CriterionCreateManyArgs} args - Arguments to create many Criteria.
     * @example
     * // Create many Criteria
     * const criterion = await prisma.criterion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CriterionCreateManyArgs>(args?: SelectSubset<T, CriterionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Criteria and returns the data saved in the database.
     * @param {CriterionCreateManyAndReturnArgs} args - Arguments to create many Criteria.
     * @example
     * // Create many Criteria
     * const criterion = await prisma.criterion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Criteria and only return the `id`
     * const criterionWithIdOnly = await prisma.criterion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CriterionCreateManyAndReturnArgs>(args?: SelectSubset<T, CriterionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Criterion.
     * @param {CriterionDeleteArgs} args - Arguments to delete one Criterion.
     * @example
     * // Delete one Criterion
     * const Criterion = await prisma.criterion.delete({
     *   where: {
     *     // ... filter to delete one Criterion
     *   }
     * })
     * 
     */
    delete<T extends CriterionDeleteArgs>(args: SelectSubset<T, CriterionDeleteArgs<ExtArgs>>): Prisma__CriterionClient<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Criterion.
     * @param {CriterionUpdateArgs} args - Arguments to update one Criterion.
     * @example
     * // Update one Criterion
     * const criterion = await prisma.criterion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CriterionUpdateArgs>(args: SelectSubset<T, CriterionUpdateArgs<ExtArgs>>): Prisma__CriterionClient<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Criteria.
     * @param {CriterionDeleteManyArgs} args - Arguments to filter Criteria to delete.
     * @example
     * // Delete a few Criteria
     * const { count } = await prisma.criterion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CriterionDeleteManyArgs>(args?: SelectSubset<T, CriterionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriterionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Criteria
     * const criterion = await prisma.criterion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CriterionUpdateManyArgs>(args: SelectSubset<T, CriterionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criteria and returns the data updated in the database.
     * @param {CriterionUpdateManyAndReturnArgs} args - Arguments to update many Criteria.
     * @example
     * // Update many Criteria
     * const criterion = await prisma.criterion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Criteria and only return the `id`
     * const criterionWithIdOnly = await prisma.criterion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CriterionUpdateManyAndReturnArgs>(args: SelectSubset<T, CriterionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Criterion.
     * @param {CriterionUpsertArgs} args - Arguments to update or create a Criterion.
     * @example
     * // Update or create a Criterion
     * const criterion = await prisma.criterion.upsert({
     *   create: {
     *     // ... data to create a Criterion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Criterion we want to update
     *   }
     * })
     */
    upsert<T extends CriterionUpsertArgs>(args: SelectSubset<T, CriterionUpsertArgs<ExtArgs>>): Prisma__CriterionClient<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriterionCountArgs} args - Arguments to filter Criteria to count.
     * @example
     * // Count the number of Criteria
     * const count = await prisma.criterion.count({
     *   where: {
     *     // ... the filter for the Criteria we want to count
     *   }
     * })
    **/
    count<T extends CriterionCountArgs>(
      args?: Subset<T, CriterionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CriterionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Criterion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriterionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CriterionAggregateArgs>(args: Subset<T, CriterionAggregateArgs>): Prisma.PrismaPromise<GetCriterionAggregateType<T>>

    /**
     * Group by Criterion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriterionGroupByArgs} args - Group by arguments.
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
      T extends CriterionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CriterionGroupByArgs['orderBy'] }
        : { orderBy?: CriterionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CriterionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCriterionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Criterion model
   */
  readonly fields: CriterionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Criterion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CriterionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    norm<T extends NormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormDefaultArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Criterion$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Criterion$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Criterion model
   */
  interface CriterionFieldRefs {
    readonly id: FieldRef<"Criterion", 'Int'>
    readonly description: FieldRef<"Criterion", 'String'>
    readonly norm_id: FieldRef<"Criterion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Criterion findUnique
   */
  export type CriterionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
    /**
     * Filter, which Criterion to fetch.
     */
    where: CriterionWhereUniqueInput
  }

  /**
   * Criterion findUniqueOrThrow
   */
  export type CriterionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
    /**
     * Filter, which Criterion to fetch.
     */
    where: CriterionWhereUniqueInput
  }

  /**
   * Criterion findFirst
   */
  export type CriterionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
    /**
     * Filter, which Criterion to fetch.
     */
    where?: CriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriterionOrderByWithRelationInput | CriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Criteria.
     */
    cursor?: CriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Criteria.
     */
    distinct?: CriterionScalarFieldEnum | CriterionScalarFieldEnum[]
  }

  /**
   * Criterion findFirstOrThrow
   */
  export type CriterionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
    /**
     * Filter, which Criterion to fetch.
     */
    where?: CriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriterionOrderByWithRelationInput | CriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Criteria.
     */
    cursor?: CriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Criteria.
     */
    distinct?: CriterionScalarFieldEnum | CriterionScalarFieldEnum[]
  }

  /**
   * Criterion findMany
   */
  export type CriterionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where?: CriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriterionOrderByWithRelationInput | CriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Criteria.
     */
    cursor?: CriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    distinct?: CriterionScalarFieldEnum | CriterionScalarFieldEnum[]
  }

  /**
   * Criterion create
   */
  export type CriterionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
    /**
     * The data needed to create a Criterion.
     */
    data: XOR<CriterionCreateInput, CriterionUncheckedCreateInput>
  }

  /**
   * Criterion createMany
   */
  export type CriterionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Criteria.
     */
    data: CriterionCreateManyInput | CriterionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Criterion createManyAndReturn
   */
  export type CriterionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * The data used to create many Criteria.
     */
    data: CriterionCreateManyInput | CriterionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Criterion update
   */
  export type CriterionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
    /**
     * The data needed to update a Criterion.
     */
    data: XOR<CriterionUpdateInput, CriterionUncheckedUpdateInput>
    /**
     * Choose, which Criterion to update.
     */
    where: CriterionWhereUniqueInput
  }

  /**
   * Criterion updateMany
   */
  export type CriterionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Criteria.
     */
    data: XOR<CriterionUpdateManyMutationInput, CriterionUncheckedUpdateManyInput>
    /**
     * Filter which Criteria to update
     */
    where?: CriterionWhereInput
    /**
     * Limit how many Criteria to update.
     */
    limit?: number
  }

  /**
   * Criterion updateManyAndReturn
   */
  export type CriterionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * The data used to update Criteria.
     */
    data: XOR<CriterionUpdateManyMutationInput, CriterionUncheckedUpdateManyInput>
    /**
     * Filter which Criteria to update
     */
    where?: CriterionWhereInput
    /**
     * Limit how many Criteria to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Criterion upsert
   */
  export type CriterionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
    /**
     * The filter to search for the Criterion to update in case it exists.
     */
    where: CriterionWhereUniqueInput
    /**
     * In case the Criterion found by the `where` argument doesn't exist, create a new Criterion with this data.
     */
    create: XOR<CriterionCreateInput, CriterionUncheckedCreateInput>
    /**
     * In case the Criterion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CriterionUpdateInput, CriterionUncheckedUpdateInput>
  }

  /**
   * Criterion delete
   */
  export type CriterionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
    /**
     * Filter which Criterion to delete.
     */
    where: CriterionWhereUniqueInput
  }

  /**
   * Criterion deleteMany
   */
  export type CriterionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Criteria to delete
     */
    where?: CriterionWhereInput
    /**
     * Limit how many Criteria to delete.
     */
    limit?: number
  }

  /**
   * Criterion.questions
   */
  export type Criterion$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Criterion without action
   */
  export type CriterionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criterion
     */
    select?: CriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criterion
     */
    omit?: CriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriterionInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    criterion_id: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    criterion_id: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    text: string | null
    criterion_id: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    text: string | null
    criterion_id: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    criterion_id: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    criterion_id?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    criterion_id?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    criterion_id?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    criterion_id?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    criterion_id?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    text: string
    criterion_id: number
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    criterion_id?: boolean
    criterion?: boolean | CriterionDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    criterion_id?: boolean
    criterion?: boolean | CriterionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    criterion_id?: boolean
    criterion?: boolean | CriterionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    criterion_id?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "criterion_id", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criterion?: boolean | CriterionDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criterion?: boolean | CriterionDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criterion?: boolean | CriterionDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      criterion: Prisma.$CriterionPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      criterion_id: number
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criterion<T extends CriterionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CriterionDefaultArgs<ExtArgs>>): Prisma__CriterionClient<$Result.GetResult<Prisma.$CriterionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly text: FieldRef<"Question", 'String'>
    readonly criterion_id: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Evaluation
   */

  export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  export type EvaluationAvgAggregateOutputType = {
    id: number | null
    company_id: number | null
    created_by: number | null
    norm_id: number | null
  }

  export type EvaluationSumAggregateOutputType = {
    id: number | null
    company_id: number | null
    created_by: number | null
    norm_id: number | null
  }

  export type EvaluationMinAggregateOutputType = {
    id: number | null
    company_id: number | null
    created_by: number | null
    created_at: Date | null
    norm_id: number | null
    observations: string | null
  }

  export type EvaluationMaxAggregateOutputType = {
    id: number | null
    company_id: number | null
    created_by: number | null
    created_at: Date | null
    norm_id: number | null
    observations: string | null
  }

  export type EvaluationCountAggregateOutputType = {
    id: number
    company_id: number
    created_by: number
    created_at: number
    norm_id: number
    observations: number
    _all: number
  }


  export type EvaluationAvgAggregateInputType = {
    id?: true
    company_id?: true
    created_by?: true
    norm_id?: true
  }

  export type EvaluationSumAggregateInputType = {
    id?: true
    company_id?: true
    created_by?: true
    norm_id?: true
  }

  export type EvaluationMinAggregateInputType = {
    id?: true
    company_id?: true
    created_by?: true
    created_at?: true
    norm_id?: true
    observations?: true
  }

  export type EvaluationMaxAggregateInputType = {
    id?: true
    company_id?: true
    created_by?: true
    created_at?: true
    norm_id?: true
    observations?: true
  }

  export type EvaluationCountAggregateInputType = {
    id?: true
    company_id?: true
    created_by?: true
    created_at?: true
    norm_id?: true
    observations?: true
    _all?: true
  }

  export type EvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation to aggregate.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evaluations
    **/
    _count?: true | EvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationMaxAggregateInputType
  }

  export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation[P]>
      : GetScalarType<T[P], AggregateEvaluation[P]>
  }




  export type EvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithAggregationInput | EvaluationOrderByWithAggregationInput[]
    by: EvaluationScalarFieldEnum[] | EvaluationScalarFieldEnum
    having?: EvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationCountAggregateInputType | true
    _avg?: EvaluationAvgAggregateInputType
    _sum?: EvaluationSumAggregateInputType
    _min?: EvaluationMinAggregateInputType
    _max?: EvaluationMaxAggregateInputType
  }

  export type EvaluationGroupByOutputType = {
    id: number
    company_id: number
    created_by: number
    created_at: Date
    norm_id: number
    observations: string | null
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    created_by?: boolean
    created_at?: boolean
    norm_id?: boolean
    observations?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
    versions?: boolean | Evaluation$versionsArgs<ExtArgs>
    _count?: boolean | EvaluationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    created_by?: boolean
    created_at?: boolean
    norm_id?: boolean
    observations?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    created_by?: boolean
    created_at?: boolean
    norm_id?: boolean
    observations?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectScalar = {
    id?: boolean
    company_id?: boolean
    created_by?: boolean
    created_at?: boolean
    norm_id?: boolean
    observations?: boolean
  }

  export type EvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "created_by" | "created_at" | "norm_id" | "observations", ExtArgs["result"]["evaluation"]>
  export type EvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
    versions?: boolean | Evaluation$versionsArgs<ExtArgs>
    _count?: boolean | EvaluationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }

  export type $EvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evaluation"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      norm: Prisma.$NormPayload<ExtArgs>
      versions: Prisma.$EvaluationVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company_id: number
      created_by: number
      created_at: Date
      norm_id: number
      observations: string | null
    }, ExtArgs["result"]["evaluation"]>
    composites: {}
  }

  type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = $Result.GetResult<Prisma.$EvaluationPayload, S>

  type EvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationCountAggregateInputType | true
    }

  export interface EvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'], meta: { name: 'Evaluation' } }
    /**
     * Find zero or one Evaluation that matches the filter.
     * @param {EvaluationFindUniqueArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationFindUniqueArgs>(args: SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationFindUniqueOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationFindFirstArgs>(args?: SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluations
     * const evaluations = await prisma.evaluation.findMany()
     * 
     * // Get first 10 Evaluations
     * const evaluations = await prisma.evaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationFindManyArgs>(args?: SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation.
     * @param {EvaluationCreateArgs} args - Arguments to create a Evaluation.
     * @example
     * // Create one Evaluation
     * const Evaluation = await prisma.evaluation.create({
     *   data: {
     *     // ... data to create a Evaluation
     *   }
     * })
     * 
     */
    create<T extends EvaluationCreateArgs>(args: SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluations.
     * @param {EvaluationCreateManyArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationCreateManyArgs>(args?: SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evaluations and returns the data saved in the database.
     * @param {EvaluationCreateManyAndReturnArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evaluation.
     * @param {EvaluationDeleteArgs} args - Arguments to delete one Evaluation.
     * @example
     * // Delete one Evaluation
     * const Evaluation = await prisma.evaluation.delete({
     *   where: {
     *     // ... filter to delete one Evaluation
     *   }
     * })
     * 
     */
    delete<T extends EvaluationDeleteArgs>(args: SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation.
     * @param {EvaluationUpdateArgs} args - Arguments to update one Evaluation.
     * @example
     * // Update one Evaluation
     * const evaluation = await prisma.evaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationUpdateArgs>(args: SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluations.
     * @param {EvaluationDeleteManyArgs} args - Arguments to filter Evaluations to delete.
     * @example
     * // Delete a few Evaluations
     * const { count } = await prisma.evaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationUpdateManyArgs>(args: SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations and returns the data updated in the database.
     * @param {EvaluationUpdateManyAndReturnArgs} args - Arguments to update many Evaluations.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evaluation.
     * @param {EvaluationUpsertArgs} args - Arguments to update or create a Evaluation.
     * @example
     * // Update or create a Evaluation
     * const evaluation = await prisma.evaluation.upsert({
     *   create: {
     *     // ... data to create a Evaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationUpsertArgs>(args: SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationCountArgs} args - Arguments to filter Evaluations to count.
     * @example
     * // Count the number of Evaluations
     * const count = await prisma.evaluation.count({
     *   where: {
     *     // ... the filter for the Evaluations we want to count
     *   }
     * })
    **/
    count<T extends EvaluationCountArgs>(
      args?: Subset<T, EvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationAggregateArgs>(args: Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>

    /**
     * Group by Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationGroupByArgs} args - Group by arguments.
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
      T extends EvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evaluation model
   */
  readonly fields: EvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    norm<T extends NormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormDefaultArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    versions<T extends Evaluation$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Evaluation$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Evaluation model
   */
  interface EvaluationFieldRefs {
    readonly id: FieldRef<"Evaluation", 'Int'>
    readonly company_id: FieldRef<"Evaluation", 'Int'>
    readonly created_by: FieldRef<"Evaluation", 'Int'>
    readonly created_at: FieldRef<"Evaluation", 'DateTime'>
    readonly norm_id: FieldRef<"Evaluation", 'Int'>
    readonly observations: FieldRef<"Evaluation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Evaluation findUnique
   */
  export type EvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findUniqueOrThrow
   */
  export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findFirst
   */
  export type EvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findFirstOrThrow
   */
  export type EvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findMany
   */
  export type EvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluations to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation create
   */
  export type EvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a Evaluation.
     */
    data: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
  }

  /**
   * Evaluation createMany
   */
  export type EvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evaluation createManyAndReturn
   */
  export type EvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation update
   */
  export type EvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a Evaluation.
     */
    data: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
    /**
     * Choose, which Evaluation to update.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation updateMany
   */
  export type EvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
  }

  /**
   * Evaluation updateManyAndReturn
   */
  export type EvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation upsert
   */
  export type EvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the Evaluation to update in case it exists.
     */
    where: EvaluationWhereUniqueInput
    /**
     * In case the Evaluation found by the `where` argument doesn't exist, create a new Evaluation with this data.
     */
    create: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
    /**
     * In case the Evaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
  }

  /**
   * Evaluation delete
   */
  export type EvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter which Evaluation to delete.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation deleteMany
   */
  export type EvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluations to delete
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to delete.
     */
    limit?: number
  }

  /**
   * Evaluation.versions
   */
  export type Evaluation$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    where?: EvaluationVersionWhereInput
    orderBy?: EvaluationVersionOrderByWithRelationInput | EvaluationVersionOrderByWithRelationInput[]
    cursor?: EvaluationVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationVersionScalarFieldEnum | EvaluationVersionScalarFieldEnum[]
  }

  /**
   * Evaluation without action
   */
  export type EvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
  }


  /**
   * Model EvaluationVersion
   */

  export type AggregateEvaluationVersion = {
    _count: EvaluationVersionCountAggregateOutputType | null
    _avg: EvaluationVersionAvgAggregateOutputType | null
    _sum: EvaluationVersionSumAggregateOutputType | null
    _min: EvaluationVersionMinAggregateOutputType | null
    _max: EvaluationVersionMaxAggregateOutputType | null
  }

  export type EvaluationVersionAvgAggregateOutputType = {
    id: number | null
    evaluation_id: number | null
    created_by: number | null
    version_number: number | null
    answered_questions: number | null
    total_questions: number | null
    completion_percentage: number | null
    score: number | null
  }

  export type EvaluationVersionSumAggregateOutputType = {
    id: number | null
    evaluation_id: number | null
    created_by: number | null
    version_number: number | null
    answered_questions: number | null
    total_questions: number | null
    completion_percentage: number | null
    score: number | null
  }

  export type EvaluationVersionMinAggregateOutputType = {
    id: number | null
    evaluation_id: number | null
    created_by: number | null
    created_at: Date | null
    is_latest: boolean | null
    status: string | null
    version_number: number | null
    answered_questions: number | null
    total_questions: number | null
    completion_percentage: number | null
    score: number | null
  }

  export type EvaluationVersionMaxAggregateOutputType = {
    id: number | null
    evaluation_id: number | null
    created_by: number | null
    created_at: Date | null
    is_latest: boolean | null
    status: string | null
    version_number: number | null
    answered_questions: number | null
    total_questions: number | null
    completion_percentage: number | null
    score: number | null
  }

  export type EvaluationVersionCountAggregateOutputType = {
    id: number
    evaluation_id: number
    created_by: number
    created_at: number
    is_latest: number
    status: number
    version_number: number
    answered_questions: number
    total_questions: number
    completion_percentage: number
    score: number
    _all: number
  }


  export type EvaluationVersionAvgAggregateInputType = {
    id?: true
    evaluation_id?: true
    created_by?: true
    version_number?: true
    answered_questions?: true
    total_questions?: true
    completion_percentage?: true
    score?: true
  }

  export type EvaluationVersionSumAggregateInputType = {
    id?: true
    evaluation_id?: true
    created_by?: true
    version_number?: true
    answered_questions?: true
    total_questions?: true
    completion_percentage?: true
    score?: true
  }

  export type EvaluationVersionMinAggregateInputType = {
    id?: true
    evaluation_id?: true
    created_by?: true
    created_at?: true
    is_latest?: true
    status?: true
    version_number?: true
    answered_questions?: true
    total_questions?: true
    completion_percentage?: true
    score?: true
  }

  export type EvaluationVersionMaxAggregateInputType = {
    id?: true
    evaluation_id?: true
    created_by?: true
    created_at?: true
    is_latest?: true
    status?: true
    version_number?: true
    answered_questions?: true
    total_questions?: true
    completion_percentage?: true
    score?: true
  }

  export type EvaluationVersionCountAggregateInputType = {
    id?: true
    evaluation_id?: true
    created_by?: true
    created_at?: true
    is_latest?: true
    status?: true
    version_number?: true
    answered_questions?: true
    total_questions?: true
    completion_percentage?: true
    score?: true
    _all?: true
  }

  export type EvaluationVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvaluationVersion to aggregate.
     */
    where?: EvaluationVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationVersions to fetch.
     */
    orderBy?: EvaluationVersionOrderByWithRelationInput | EvaluationVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvaluationVersions
    **/
    _count?: true | EvaluationVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationVersionMaxAggregateInputType
  }

  export type GetEvaluationVersionAggregateType<T extends EvaluationVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluationVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluationVersion[P]>
      : GetScalarType<T[P], AggregateEvaluationVersion[P]>
  }




  export type EvaluationVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationVersionWhereInput
    orderBy?: EvaluationVersionOrderByWithAggregationInput | EvaluationVersionOrderByWithAggregationInput[]
    by: EvaluationVersionScalarFieldEnum[] | EvaluationVersionScalarFieldEnum
    having?: EvaluationVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationVersionCountAggregateInputType | true
    _avg?: EvaluationVersionAvgAggregateInputType
    _sum?: EvaluationVersionSumAggregateInputType
    _min?: EvaluationVersionMinAggregateInputType
    _max?: EvaluationVersionMaxAggregateInputType
  }

  export type EvaluationVersionGroupByOutputType = {
    id: number
    evaluation_id: number
    created_by: number
    created_at: Date
    is_latest: boolean
    status: string | null
    version_number: number | null
    answered_questions: number | null
    total_questions: number | null
    completion_percentage: number | null
    score: number | null
    _count: EvaluationVersionCountAggregateOutputType | null
    _avg: EvaluationVersionAvgAggregateOutputType | null
    _sum: EvaluationVersionSumAggregateOutputType | null
    _min: EvaluationVersionMinAggregateOutputType | null
    _max: EvaluationVersionMaxAggregateOutputType | null
  }

  type GetEvaluationVersionGroupByPayload<T extends EvaluationVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationVersionGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationVersionGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluation_id?: boolean
    created_by?: boolean
    created_at?: boolean
    is_latest?: boolean
    status?: boolean
    version_number?: boolean
    answered_questions?: boolean
    total_questions?: boolean
    completion_percentage?: boolean
    score?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | EvaluationVersion$answersArgs<ExtArgs>
    _count?: boolean | EvaluationVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationVersion"]>

  export type EvaluationVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluation_id?: boolean
    created_by?: boolean
    created_at?: boolean
    is_latest?: boolean
    status?: boolean
    version_number?: boolean
    answered_questions?: boolean
    total_questions?: boolean
    completion_percentage?: boolean
    score?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationVersion"]>

  export type EvaluationVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluation_id?: boolean
    created_by?: boolean
    created_at?: boolean
    is_latest?: boolean
    status?: boolean
    version_number?: boolean
    answered_questions?: boolean
    total_questions?: boolean
    completion_percentage?: boolean
    score?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationVersion"]>

  export type EvaluationVersionSelectScalar = {
    id?: boolean
    evaluation_id?: boolean
    created_by?: boolean
    created_at?: boolean
    is_latest?: boolean
    status?: boolean
    version_number?: boolean
    answered_questions?: boolean
    total_questions?: boolean
    completion_percentage?: boolean
    score?: boolean
  }

  export type EvaluationVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "evaluation_id" | "created_by" | "created_at" | "is_latest" | "status" | "version_number" | "answered_questions" | "total_questions" | "completion_percentage" | "score", ExtArgs["result"]["evaluationVersion"]>
  export type EvaluationVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | EvaluationVersion$answersArgs<ExtArgs>
    _count?: boolean | EvaluationVersionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EvaluationVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EvaluationVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EvaluationVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvaluationVersion"
    objects: {
      evaluation: Prisma.$EvaluationPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      evaluation_id: number
      created_by: number
      created_at: Date
      is_latest: boolean
      status: string | null
      version_number: number | null
      answered_questions: number | null
      total_questions: number | null
      completion_percentage: number | null
      score: number | null
    }, ExtArgs["result"]["evaluationVersion"]>
    composites: {}
  }

  type EvaluationVersionGetPayload<S extends boolean | null | undefined | EvaluationVersionDefaultArgs> = $Result.GetResult<Prisma.$EvaluationVersionPayload, S>

  type EvaluationVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationVersionCountAggregateInputType | true
    }

  export interface EvaluationVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvaluationVersion'], meta: { name: 'EvaluationVersion' } }
    /**
     * Find zero or one EvaluationVersion that matches the filter.
     * @param {EvaluationVersionFindUniqueArgs} args - Arguments to find a EvaluationVersion
     * @example
     * // Get one EvaluationVersion
     * const evaluationVersion = await prisma.evaluationVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationVersionFindUniqueArgs>(args: SelectSubset<T, EvaluationVersionFindUniqueArgs<ExtArgs>>): Prisma__EvaluationVersionClient<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EvaluationVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationVersionFindUniqueOrThrowArgs} args - Arguments to find a EvaluationVersion
     * @example
     * // Get one EvaluationVersion
     * const evaluationVersion = await prisma.evaluationVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationVersionClient<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvaluationVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationVersionFindFirstArgs} args - Arguments to find a EvaluationVersion
     * @example
     * // Get one EvaluationVersion
     * const evaluationVersion = await prisma.evaluationVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationVersionFindFirstArgs>(args?: SelectSubset<T, EvaluationVersionFindFirstArgs<ExtArgs>>): Prisma__EvaluationVersionClient<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvaluationVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationVersionFindFirstOrThrowArgs} args - Arguments to find a EvaluationVersion
     * @example
     * // Get one EvaluationVersion
     * const evaluationVersion = await prisma.evaluationVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationVersionClient<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EvaluationVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvaluationVersions
     * const evaluationVersions = await prisma.evaluationVersion.findMany()
     * 
     * // Get first 10 EvaluationVersions
     * const evaluationVersions = await prisma.evaluationVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationVersionWithIdOnly = await prisma.evaluationVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationVersionFindManyArgs>(args?: SelectSubset<T, EvaluationVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EvaluationVersion.
     * @param {EvaluationVersionCreateArgs} args - Arguments to create a EvaluationVersion.
     * @example
     * // Create one EvaluationVersion
     * const EvaluationVersion = await prisma.evaluationVersion.create({
     *   data: {
     *     // ... data to create a EvaluationVersion
     *   }
     * })
     * 
     */
    create<T extends EvaluationVersionCreateArgs>(args: SelectSubset<T, EvaluationVersionCreateArgs<ExtArgs>>): Prisma__EvaluationVersionClient<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EvaluationVersions.
     * @param {EvaluationVersionCreateManyArgs} args - Arguments to create many EvaluationVersions.
     * @example
     * // Create many EvaluationVersions
     * const evaluationVersion = await prisma.evaluationVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationVersionCreateManyArgs>(args?: SelectSubset<T, EvaluationVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvaluationVersions and returns the data saved in the database.
     * @param {EvaluationVersionCreateManyAndReturnArgs} args - Arguments to create many EvaluationVersions.
     * @example
     * // Create many EvaluationVersions
     * const evaluationVersion = await prisma.evaluationVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvaluationVersions and only return the `id`
     * const evaluationVersionWithIdOnly = await prisma.evaluationVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EvaluationVersion.
     * @param {EvaluationVersionDeleteArgs} args - Arguments to delete one EvaluationVersion.
     * @example
     * // Delete one EvaluationVersion
     * const EvaluationVersion = await prisma.evaluationVersion.delete({
     *   where: {
     *     // ... filter to delete one EvaluationVersion
     *   }
     * })
     * 
     */
    delete<T extends EvaluationVersionDeleteArgs>(args: SelectSubset<T, EvaluationVersionDeleteArgs<ExtArgs>>): Prisma__EvaluationVersionClient<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EvaluationVersion.
     * @param {EvaluationVersionUpdateArgs} args - Arguments to update one EvaluationVersion.
     * @example
     * // Update one EvaluationVersion
     * const evaluationVersion = await prisma.evaluationVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationVersionUpdateArgs>(args: SelectSubset<T, EvaluationVersionUpdateArgs<ExtArgs>>): Prisma__EvaluationVersionClient<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EvaluationVersions.
     * @param {EvaluationVersionDeleteManyArgs} args - Arguments to filter EvaluationVersions to delete.
     * @example
     * // Delete a few EvaluationVersions
     * const { count } = await prisma.evaluationVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationVersionDeleteManyArgs>(args?: SelectSubset<T, EvaluationVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvaluationVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvaluationVersions
     * const evaluationVersion = await prisma.evaluationVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationVersionUpdateManyArgs>(args: SelectSubset<T, EvaluationVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvaluationVersions and returns the data updated in the database.
     * @param {EvaluationVersionUpdateManyAndReturnArgs} args - Arguments to update many EvaluationVersions.
     * @example
     * // Update many EvaluationVersions
     * const evaluationVersion = await prisma.evaluationVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvaluationVersions and only return the `id`
     * const evaluationVersionWithIdOnly = await prisma.evaluationVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvaluationVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EvaluationVersion.
     * @param {EvaluationVersionUpsertArgs} args - Arguments to update or create a EvaluationVersion.
     * @example
     * // Update or create a EvaluationVersion
     * const evaluationVersion = await prisma.evaluationVersion.upsert({
     *   create: {
     *     // ... data to create a EvaluationVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvaluationVersion we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationVersionUpsertArgs>(args: SelectSubset<T, EvaluationVersionUpsertArgs<ExtArgs>>): Prisma__EvaluationVersionClient<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EvaluationVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationVersionCountArgs} args - Arguments to filter EvaluationVersions to count.
     * @example
     * // Count the number of EvaluationVersions
     * const count = await prisma.evaluationVersion.count({
     *   where: {
     *     // ... the filter for the EvaluationVersions we want to count
     *   }
     * })
    **/
    count<T extends EvaluationVersionCountArgs>(
      args?: Subset<T, EvaluationVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvaluationVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationVersionAggregateArgs>(args: Subset<T, EvaluationVersionAggregateArgs>): Prisma.PrismaPromise<GetEvaluationVersionAggregateType<T>>

    /**
     * Group by EvaluationVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationVersionGroupByArgs} args - Group by arguments.
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
      T extends EvaluationVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationVersionGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationVersionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvaluationVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvaluationVersion model
   */
  readonly fields: EvaluationVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvaluationVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation<T extends EvaluationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EvaluationDefaultArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends EvaluationVersion$answersArgs<ExtArgs> = {}>(args?: Subset<T, EvaluationVersion$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EvaluationVersion model
   */
  interface EvaluationVersionFieldRefs {
    readonly id: FieldRef<"EvaluationVersion", 'Int'>
    readonly evaluation_id: FieldRef<"EvaluationVersion", 'Int'>
    readonly created_by: FieldRef<"EvaluationVersion", 'Int'>
    readonly created_at: FieldRef<"EvaluationVersion", 'DateTime'>
    readonly is_latest: FieldRef<"EvaluationVersion", 'Boolean'>
    readonly status: FieldRef<"EvaluationVersion", 'String'>
    readonly version_number: FieldRef<"EvaluationVersion", 'Int'>
    readonly answered_questions: FieldRef<"EvaluationVersion", 'Int'>
    readonly total_questions: FieldRef<"EvaluationVersion", 'Int'>
    readonly completion_percentage: FieldRef<"EvaluationVersion", 'Float'>
    readonly score: FieldRef<"EvaluationVersion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EvaluationVersion findUnique
   */
  export type EvaluationVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationVersion to fetch.
     */
    where: EvaluationVersionWhereUniqueInput
  }

  /**
   * EvaluationVersion findUniqueOrThrow
   */
  export type EvaluationVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationVersion to fetch.
     */
    where: EvaluationVersionWhereUniqueInput
  }

  /**
   * EvaluationVersion findFirst
   */
  export type EvaluationVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationVersion to fetch.
     */
    where?: EvaluationVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationVersions to fetch.
     */
    orderBy?: EvaluationVersionOrderByWithRelationInput | EvaluationVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvaluationVersions.
     */
    cursor?: EvaluationVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationVersions.
     */
    distinct?: EvaluationVersionScalarFieldEnum | EvaluationVersionScalarFieldEnum[]
  }

  /**
   * EvaluationVersion findFirstOrThrow
   */
  export type EvaluationVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationVersion to fetch.
     */
    where?: EvaluationVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationVersions to fetch.
     */
    orderBy?: EvaluationVersionOrderByWithRelationInput | EvaluationVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvaluationVersions.
     */
    cursor?: EvaluationVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationVersions.
     */
    distinct?: EvaluationVersionScalarFieldEnum | EvaluationVersionScalarFieldEnum[]
  }

  /**
   * EvaluationVersion findMany
   */
  export type EvaluationVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationVersions to fetch.
     */
    where?: EvaluationVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationVersions to fetch.
     */
    orderBy?: EvaluationVersionOrderByWithRelationInput | EvaluationVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvaluationVersions.
     */
    cursor?: EvaluationVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationVersions.
     */
    skip?: number
    distinct?: EvaluationVersionScalarFieldEnum | EvaluationVersionScalarFieldEnum[]
  }

  /**
   * EvaluationVersion create
   */
  export type EvaluationVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a EvaluationVersion.
     */
    data: XOR<EvaluationVersionCreateInput, EvaluationVersionUncheckedCreateInput>
  }

  /**
   * EvaluationVersion createMany
   */
  export type EvaluationVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvaluationVersions.
     */
    data: EvaluationVersionCreateManyInput | EvaluationVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvaluationVersion createManyAndReturn
   */
  export type EvaluationVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * The data used to create many EvaluationVersions.
     */
    data: EvaluationVersionCreateManyInput | EvaluationVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvaluationVersion update
   */
  export type EvaluationVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a EvaluationVersion.
     */
    data: XOR<EvaluationVersionUpdateInput, EvaluationVersionUncheckedUpdateInput>
    /**
     * Choose, which EvaluationVersion to update.
     */
    where: EvaluationVersionWhereUniqueInput
  }

  /**
   * EvaluationVersion updateMany
   */
  export type EvaluationVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvaluationVersions.
     */
    data: XOR<EvaluationVersionUpdateManyMutationInput, EvaluationVersionUncheckedUpdateManyInput>
    /**
     * Filter which EvaluationVersions to update
     */
    where?: EvaluationVersionWhereInput
    /**
     * Limit how many EvaluationVersions to update.
     */
    limit?: number
  }

  /**
   * EvaluationVersion updateManyAndReturn
   */
  export type EvaluationVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * The data used to update EvaluationVersions.
     */
    data: XOR<EvaluationVersionUpdateManyMutationInput, EvaluationVersionUncheckedUpdateManyInput>
    /**
     * Filter which EvaluationVersions to update
     */
    where?: EvaluationVersionWhereInput
    /**
     * Limit how many EvaluationVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvaluationVersion upsert
   */
  export type EvaluationVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the EvaluationVersion to update in case it exists.
     */
    where: EvaluationVersionWhereUniqueInput
    /**
     * In case the EvaluationVersion found by the `where` argument doesn't exist, create a new EvaluationVersion with this data.
     */
    create: XOR<EvaluationVersionCreateInput, EvaluationVersionUncheckedCreateInput>
    /**
     * In case the EvaluationVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationVersionUpdateInput, EvaluationVersionUncheckedUpdateInput>
  }

  /**
   * EvaluationVersion delete
   */
  export type EvaluationVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
    /**
     * Filter which EvaluationVersion to delete.
     */
    where: EvaluationVersionWhereUniqueInput
  }

  /**
   * EvaluationVersion deleteMany
   */
  export type EvaluationVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvaluationVersions to delete
     */
    where?: EvaluationVersionWhereInput
    /**
     * Limit how many EvaluationVersions to delete.
     */
    limit?: number
  }

  /**
   * EvaluationVersion.answers
   */
  export type EvaluationVersion$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * EvaluationVersion without action
   */
  export type EvaluationVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationVersion
     */
    select?: EvaluationVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationVersion
     */
    omit?: EvaluationVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationVersionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    id: number | null
    question_id: number | null
    version_id: number | null
    created_by: number | null
    score: number | null
  }

  export type AnswerSumAggregateOutputType = {
    id: number | null
    question_id: number | null
    version_id: number | null
    created_by: number | null
    score: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: number | null
    question_id: number | null
    version_id: number | null
    response: string | null
    created_by: number | null
    created_at: Date | null
    score: number | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: number | null
    question_id: number | null
    version_id: number | null
    response: string | null
    created_by: number | null
    created_at: Date | null
    score: number | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    question_id: number
    version_id: number
    response: number
    created_by: number
    created_at: number
    score: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    id?: true
    question_id?: true
    version_id?: true
    created_by?: true
    score?: true
  }

  export type AnswerSumAggregateInputType = {
    id?: true
    question_id?: true
    version_id?: true
    created_by?: true
    score?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    question_id?: true
    version_id?: true
    response?: true
    created_by?: true
    created_at?: true
    score?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    question_id?: true
    version_id?: true
    response?: true
    created_by?: true
    created_at?: true
    score?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    question_id?: true
    version_id?: true
    response?: true
    created_by?: true
    created_at?: true
    score?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: number
    question_id: number
    version_id: number
    response: string | null
    created_by: number
    created_at: Date
    score: number | null
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    version_id?: boolean
    response?: boolean
    created_by?: boolean
    created_at?: boolean
    score?: boolean
    comments?: boolean | Answer$commentsArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    evaluationVersion?: boolean | EvaluationVersionDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    evidences?: boolean | Answer$evidencesArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    version_id?: boolean
    response?: boolean
    created_by?: boolean
    created_at?: boolean
    score?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    evaluationVersion?: boolean | EvaluationVersionDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    version_id?: boolean
    response?: boolean
    created_by?: boolean
    created_at?: boolean
    score?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    evaluationVersion?: boolean | EvaluationVersionDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    question_id?: boolean
    version_id?: boolean
    response?: boolean
    created_by?: boolean
    created_at?: boolean
    score?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_id" | "version_id" | "response" | "created_by" | "created_at" | "score", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Answer$commentsArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    evaluationVersion?: boolean | EvaluationVersionDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    evidences?: boolean | Answer$evidencesArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    evaluationVersion?: boolean | EvaluationVersionDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    evaluationVersion?: boolean | EvaluationVersionDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      question: Prisma.$QuestionPayload<ExtArgs>
      evaluationVersion: Prisma.$EvaluationVersionPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      evidences: Prisma.$EvidencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question_id: number
      version_id: number
      response: string | null
      created_by: number
      created_at: Date
      score: number | null
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Answer$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Answer$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluationVersion<T extends EvaluationVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EvaluationVersionDefaultArgs<ExtArgs>>): Prisma__EvaluationVersionClient<$Result.GetResult<Prisma.$EvaluationVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evidences<T extends Answer$evidencesArgs<ExtArgs> = {}>(args?: Subset<T, Answer$evidencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'Int'>
    readonly question_id: FieldRef<"Answer", 'Int'>
    readonly version_id: FieldRef<"Answer", 'Int'>
    readonly response: FieldRef<"Answer", 'String'>
    readonly created_by: FieldRef<"Answer", 'Int'>
    readonly created_at: FieldRef<"Answer", 'DateTime'>
    readonly score: FieldRef<"Answer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer.comments
   */
  export type Answer$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Answer.evidences
   */
  export type Answer$evidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    cursor?: EvidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    answer_id: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    answer_id: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    text: string | null
    created_by: number | null
    answer_id: number | null
    created_at: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    text: string | null
    created_by: number | null
    answer_id: number | null
    created_at: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    created_by: number
    answer_id: number
    created_at: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    created_by?: true
    answer_id?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    created_by?: true
    answer_id?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
    created_by?: true
    answer_id?: true
    created_at?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
    created_by?: true
    answer_id?: true
    created_at?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    created_by?: true
    answer_id?: true
    created_at?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    text: string
    created_by: number
    answer_id: number
    created_at: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    created_by?: boolean
    answer_id?: boolean
    created_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    created_by?: boolean
    answer_id?: boolean
    created_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    created_by?: boolean
    answer_id?: boolean
    created_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    text?: boolean
    created_by?: boolean
    answer_id?: boolean
    created_at?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "created_by" | "answer_id" | "created_at", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      answer: Prisma.$AnswerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      created_by: number
      answer_id: number
      created_at: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answer<T extends AnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerDefaultArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly created_by: FieldRef<"Comment", 'Int'>
    readonly answer_id: FieldRef<"Comment", 'Int'>
    readonly created_at: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Evidence
   */

  export type AggregateEvidence = {
    _count: EvidenceCountAggregateOutputType | null
    _avg: EvidenceAvgAggregateOutputType | null
    _sum: EvidenceSumAggregateOutputType | null
    _min: EvidenceMinAggregateOutputType | null
    _max: EvidenceMaxAggregateOutputType | null
  }

  export type EvidenceAvgAggregateOutputType = {
    id: number | null
    answer_id: number | null
    created_by: number | null
  }

  export type EvidenceSumAggregateOutputType = {
    id: number | null
    answer_id: number | null
    created_by: number | null
  }

  export type EvidenceMinAggregateOutputType = {
    id: number | null
    answer_id: number | null
    created_by: number | null
    created_at: Date | null
  }

  export type EvidenceMaxAggregateOutputType = {
    id: number | null
    answer_id: number | null
    created_by: number | null
    created_at: Date | null
  }

  export type EvidenceCountAggregateOutputType = {
    id: number
    answer_id: number
    url: number
    created_by: number
    created_at: number
    _all: number
  }


  export type EvidenceAvgAggregateInputType = {
    id?: true
    answer_id?: true
    created_by?: true
  }

  export type EvidenceSumAggregateInputType = {
    id?: true
    answer_id?: true
    created_by?: true
  }

  export type EvidenceMinAggregateInputType = {
    id?: true
    answer_id?: true
    created_by?: true
    created_at?: true
  }

  export type EvidenceMaxAggregateInputType = {
    id?: true
    answer_id?: true
    created_by?: true
    created_at?: true
  }

  export type EvidenceCountAggregateInputType = {
    id?: true
    answer_id?: true
    url?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type EvidenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evidence to aggregate.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evidences
    **/
    _count?: true | EvidenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvidenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvidenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvidenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvidenceMaxAggregateInputType
  }

  export type GetEvidenceAggregateType<T extends EvidenceAggregateArgs> = {
        [P in keyof T & keyof AggregateEvidence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvidence[P]>
      : GetScalarType<T[P], AggregateEvidence[P]>
  }




  export type EvidenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithAggregationInput | EvidenceOrderByWithAggregationInput[]
    by: EvidenceScalarFieldEnum[] | EvidenceScalarFieldEnum
    having?: EvidenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvidenceCountAggregateInputType | true
    _avg?: EvidenceAvgAggregateInputType
    _sum?: EvidenceSumAggregateInputType
    _min?: EvidenceMinAggregateInputType
    _max?: EvidenceMaxAggregateInputType
  }

  export type EvidenceGroupByOutputType = {
    id: number
    answer_id: number
    url: string[]
    created_by: number
    created_at: Date
    _count: EvidenceCountAggregateOutputType | null
    _avg: EvidenceAvgAggregateOutputType | null
    _sum: EvidenceSumAggregateOutputType | null
    _min: EvidenceMinAggregateOutputType | null
    _max: EvidenceMaxAggregateOutputType | null
  }

  type GetEvidenceGroupByPayload<T extends EvidenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvidenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvidenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvidenceGroupByOutputType[P]>
            : GetScalarType<T[P], EvidenceGroupByOutputType[P]>
        }
      >
    >


  export type EvidenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answer_id?: boolean
    url?: boolean
    created_by?: boolean
    created_at?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answer_id?: boolean
    url?: boolean
    created_by?: boolean
    created_at?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answer_id?: boolean
    url?: boolean
    created_by?: boolean
    created_at?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectScalar = {
    id?: boolean
    answer_id?: boolean
    url?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type EvidenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "answer_id" | "url" | "created_by" | "created_at", ExtArgs["result"]["evidence"]>
  export type EvidenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EvidenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EvidenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EvidencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evidence"
    objects: {
      answer: Prisma.$AnswerPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      answer_id: number
      url: string[]
      created_by: number
      created_at: Date
    }, ExtArgs["result"]["evidence"]>
    composites: {}
  }

  type EvidenceGetPayload<S extends boolean | null | undefined | EvidenceDefaultArgs> = $Result.GetResult<Prisma.$EvidencePayload, S>

  type EvidenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvidenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvidenceCountAggregateInputType | true
    }

  export interface EvidenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evidence'], meta: { name: 'Evidence' } }
    /**
     * Find zero or one Evidence that matches the filter.
     * @param {EvidenceFindUniqueArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvidenceFindUniqueArgs>(args: SelectSubset<T, EvidenceFindUniqueArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evidence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvidenceFindUniqueOrThrowArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvidenceFindUniqueOrThrowArgs>(args: SelectSubset<T, EvidenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evidence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindFirstArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvidenceFindFirstArgs>(args?: SelectSubset<T, EvidenceFindFirstArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evidence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindFirstOrThrowArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvidenceFindFirstOrThrowArgs>(args?: SelectSubset<T, EvidenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evidences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evidences
     * const evidences = await prisma.evidence.findMany()
     * 
     * // Get first 10 Evidences
     * const evidences = await prisma.evidence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evidenceWithIdOnly = await prisma.evidence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvidenceFindManyArgs>(args?: SelectSubset<T, EvidenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evidence.
     * @param {EvidenceCreateArgs} args - Arguments to create a Evidence.
     * @example
     * // Create one Evidence
     * const Evidence = await prisma.evidence.create({
     *   data: {
     *     // ... data to create a Evidence
     *   }
     * })
     * 
     */
    create<T extends EvidenceCreateArgs>(args: SelectSubset<T, EvidenceCreateArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evidences.
     * @param {EvidenceCreateManyArgs} args - Arguments to create many Evidences.
     * @example
     * // Create many Evidences
     * const evidence = await prisma.evidence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvidenceCreateManyArgs>(args?: SelectSubset<T, EvidenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evidences and returns the data saved in the database.
     * @param {EvidenceCreateManyAndReturnArgs} args - Arguments to create many Evidences.
     * @example
     * // Create many Evidences
     * const evidence = await prisma.evidence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evidences and only return the `id`
     * const evidenceWithIdOnly = await prisma.evidence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvidenceCreateManyAndReturnArgs>(args?: SelectSubset<T, EvidenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evidence.
     * @param {EvidenceDeleteArgs} args - Arguments to delete one Evidence.
     * @example
     * // Delete one Evidence
     * const Evidence = await prisma.evidence.delete({
     *   where: {
     *     // ... filter to delete one Evidence
     *   }
     * })
     * 
     */
    delete<T extends EvidenceDeleteArgs>(args: SelectSubset<T, EvidenceDeleteArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evidence.
     * @param {EvidenceUpdateArgs} args - Arguments to update one Evidence.
     * @example
     * // Update one Evidence
     * const evidence = await prisma.evidence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvidenceUpdateArgs>(args: SelectSubset<T, EvidenceUpdateArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evidences.
     * @param {EvidenceDeleteManyArgs} args - Arguments to filter Evidences to delete.
     * @example
     * // Delete a few Evidences
     * const { count } = await prisma.evidence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvidenceDeleteManyArgs>(args?: SelectSubset<T, EvidenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evidences
     * const evidence = await prisma.evidence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvidenceUpdateManyArgs>(args: SelectSubset<T, EvidenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evidences and returns the data updated in the database.
     * @param {EvidenceUpdateManyAndReturnArgs} args - Arguments to update many Evidences.
     * @example
     * // Update many Evidences
     * const evidence = await prisma.evidence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evidences and only return the `id`
     * const evidenceWithIdOnly = await prisma.evidence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvidenceUpdateManyAndReturnArgs>(args: SelectSubset<T, EvidenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evidence.
     * @param {EvidenceUpsertArgs} args - Arguments to update or create a Evidence.
     * @example
     * // Update or create a Evidence
     * const evidence = await prisma.evidence.upsert({
     *   create: {
     *     // ... data to create a Evidence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evidence we want to update
     *   }
     * })
     */
    upsert<T extends EvidenceUpsertArgs>(args: SelectSubset<T, EvidenceUpsertArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceCountArgs} args - Arguments to filter Evidences to count.
     * @example
     * // Count the number of Evidences
     * const count = await prisma.evidence.count({
     *   where: {
     *     // ... the filter for the Evidences we want to count
     *   }
     * })
    **/
    count<T extends EvidenceCountArgs>(
      args?: Subset<T, EvidenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvidenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvidenceAggregateArgs>(args: Subset<T, EvidenceAggregateArgs>): Prisma.PrismaPromise<GetEvidenceAggregateType<T>>

    /**
     * Group by Evidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceGroupByArgs} args - Group by arguments.
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
      T extends EvidenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvidenceGroupByArgs['orderBy'] }
        : { orderBy?: EvidenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvidenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvidenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evidence model
   */
  readonly fields: EvidenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evidence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvidenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answer<T extends AnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerDefaultArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evidence model
   */
  interface EvidenceFieldRefs {
    readonly id: FieldRef<"Evidence", 'Int'>
    readonly answer_id: FieldRef<"Evidence", 'Int'>
    readonly url: FieldRef<"Evidence", 'String[]'>
    readonly created_by: FieldRef<"Evidence", 'Int'>
    readonly created_at: FieldRef<"Evidence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evidence findUnique
   */
  export type EvidenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence findUniqueOrThrow
   */
  export type EvidenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence findFirst
   */
  export type EvidenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence findFirstOrThrow
   */
  export type EvidenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence findMany
   */
  export type EvidenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidences to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence create
   */
  export type EvidenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Evidence.
     */
    data: XOR<EvidenceCreateInput, EvidenceUncheckedCreateInput>
  }

  /**
   * Evidence createMany
   */
  export type EvidenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evidences.
     */
    data: EvidenceCreateManyInput | EvidenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evidence createManyAndReturn
   */
  export type EvidenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * The data used to create many Evidences.
     */
    data: EvidenceCreateManyInput | EvidenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evidence update
   */
  export type EvidenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Evidence.
     */
    data: XOR<EvidenceUpdateInput, EvidenceUncheckedUpdateInput>
    /**
     * Choose, which Evidence to update.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence updateMany
   */
  export type EvidenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evidences.
     */
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyInput>
    /**
     * Filter which Evidences to update
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to update.
     */
    limit?: number
  }

  /**
   * Evidence updateManyAndReturn
   */
  export type EvidenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * The data used to update Evidences.
     */
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyInput>
    /**
     * Filter which Evidences to update
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evidence upsert
   */
  export type EvidenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Evidence to update in case it exists.
     */
    where: EvidenceWhereUniqueInput
    /**
     * In case the Evidence found by the `where` argument doesn't exist, create a new Evidence with this data.
     */
    create: XOR<EvidenceCreateInput, EvidenceUncheckedCreateInput>
    /**
     * In case the Evidence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvidenceUpdateInput, EvidenceUncheckedUpdateInput>
  }

  /**
   * Evidence delete
   */
  export type EvidenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter which Evidence to delete.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence deleteMany
   */
  export type EvidenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evidences to delete
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to delete.
     */
    limit?: number
  }

  /**
   * Evidence without action
   */
  export type EvidenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
  }


  /**
   * Model EvaluationFrequencyConfig
   */

  export type AggregateEvaluationFrequencyConfig = {
    _count: EvaluationFrequencyConfigCountAggregateOutputType | null
    _avg: EvaluationFrequencyConfigAvgAggregateOutputType | null
    _sum: EvaluationFrequencyConfigSumAggregateOutputType | null
    _min: EvaluationFrequencyConfigMinAggregateOutputType | null
    _max: EvaluationFrequencyConfigMaxAggregateOutputType | null
  }

  export type EvaluationFrequencyConfigAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    company_id: number | null
    norm_id: number | null
    frequency_days: number | null
  }

  export type EvaluationFrequencyConfigSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    company_id: number | null
    norm_id: number | null
    frequency_days: number | null
  }

  export type EvaluationFrequencyConfigMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    company_id: number | null
    norm_id: number | null
    frequency_days: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EvaluationFrequencyConfigMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    company_id: number | null
    norm_id: number | null
    frequency_days: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EvaluationFrequencyConfigCountAggregateOutputType = {
    id: number
    user_id: number
    company_id: number
    norm_id: number
    frequency_days: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EvaluationFrequencyConfigAvgAggregateInputType = {
    id?: true
    user_id?: true
    company_id?: true
    norm_id?: true
    frequency_days?: true
  }

  export type EvaluationFrequencyConfigSumAggregateInputType = {
    id?: true
    user_id?: true
    company_id?: true
    norm_id?: true
    frequency_days?: true
  }

  export type EvaluationFrequencyConfigMinAggregateInputType = {
    id?: true
    user_id?: true
    company_id?: true
    norm_id?: true
    frequency_days?: true
    created_at?: true
    updated_at?: true
  }

  export type EvaluationFrequencyConfigMaxAggregateInputType = {
    id?: true
    user_id?: true
    company_id?: true
    norm_id?: true
    frequency_days?: true
    created_at?: true
    updated_at?: true
  }

  export type EvaluationFrequencyConfigCountAggregateInputType = {
    id?: true
    user_id?: true
    company_id?: true
    norm_id?: true
    frequency_days?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EvaluationFrequencyConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvaluationFrequencyConfig to aggregate.
     */
    where?: EvaluationFrequencyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationFrequencyConfigs to fetch.
     */
    orderBy?: EvaluationFrequencyConfigOrderByWithRelationInput | EvaluationFrequencyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationFrequencyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationFrequencyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationFrequencyConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvaluationFrequencyConfigs
    **/
    _count?: true | EvaluationFrequencyConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationFrequencyConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationFrequencyConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationFrequencyConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationFrequencyConfigMaxAggregateInputType
  }

  export type GetEvaluationFrequencyConfigAggregateType<T extends EvaluationFrequencyConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluationFrequencyConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluationFrequencyConfig[P]>
      : GetScalarType<T[P], AggregateEvaluationFrequencyConfig[P]>
  }




  export type EvaluationFrequencyConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationFrequencyConfigWhereInput
    orderBy?: EvaluationFrequencyConfigOrderByWithAggregationInput | EvaluationFrequencyConfigOrderByWithAggregationInput[]
    by: EvaluationFrequencyConfigScalarFieldEnum[] | EvaluationFrequencyConfigScalarFieldEnum
    having?: EvaluationFrequencyConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationFrequencyConfigCountAggregateInputType | true
    _avg?: EvaluationFrequencyConfigAvgAggregateInputType
    _sum?: EvaluationFrequencyConfigSumAggregateInputType
    _min?: EvaluationFrequencyConfigMinAggregateInputType
    _max?: EvaluationFrequencyConfigMaxAggregateInputType
  }

  export type EvaluationFrequencyConfigGroupByOutputType = {
    id: number
    user_id: number
    company_id: number
    norm_id: number
    frequency_days: number
    created_at: Date
    updated_at: Date
    _count: EvaluationFrequencyConfigCountAggregateOutputType | null
    _avg: EvaluationFrequencyConfigAvgAggregateOutputType | null
    _sum: EvaluationFrequencyConfigSumAggregateOutputType | null
    _min: EvaluationFrequencyConfigMinAggregateOutputType | null
    _max: EvaluationFrequencyConfigMaxAggregateOutputType | null
  }

  type GetEvaluationFrequencyConfigGroupByPayload<T extends EvaluationFrequencyConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationFrequencyConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationFrequencyConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationFrequencyConfigGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationFrequencyConfigGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationFrequencyConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    company_id?: boolean
    norm_id?: boolean
    frequency_days?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationFrequencyConfig"]>

  export type EvaluationFrequencyConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    company_id?: boolean
    norm_id?: boolean
    frequency_days?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationFrequencyConfig"]>

  export type EvaluationFrequencyConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    company_id?: boolean
    norm_id?: boolean
    frequency_days?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationFrequencyConfig"]>

  export type EvaluationFrequencyConfigSelectScalar = {
    id?: boolean
    user_id?: boolean
    company_id?: boolean
    norm_id?: boolean
    frequency_days?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EvaluationFrequencyConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "company_id" | "norm_id" | "frequency_days" | "created_at" | "updated_at", ExtArgs["result"]["evaluationFrequencyConfig"]>
  export type EvaluationFrequencyConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }
  export type EvaluationFrequencyConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }
  export type EvaluationFrequencyConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    norm?: boolean | NormDefaultArgs<ExtArgs>
  }

  export type $EvaluationFrequencyConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvaluationFrequencyConfig"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      norm: Prisma.$NormPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      company_id: number
      norm_id: number
      frequency_days: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["evaluationFrequencyConfig"]>
    composites: {}
  }

  type EvaluationFrequencyConfigGetPayload<S extends boolean | null | undefined | EvaluationFrequencyConfigDefaultArgs> = $Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload, S>

  type EvaluationFrequencyConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationFrequencyConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationFrequencyConfigCountAggregateInputType | true
    }

  export interface EvaluationFrequencyConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvaluationFrequencyConfig'], meta: { name: 'EvaluationFrequencyConfig' } }
    /**
     * Find zero or one EvaluationFrequencyConfig that matches the filter.
     * @param {EvaluationFrequencyConfigFindUniqueArgs} args - Arguments to find a EvaluationFrequencyConfig
     * @example
     * // Get one EvaluationFrequencyConfig
     * const evaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationFrequencyConfigFindUniqueArgs>(args: SelectSubset<T, EvaluationFrequencyConfigFindUniqueArgs<ExtArgs>>): Prisma__EvaluationFrequencyConfigClient<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EvaluationFrequencyConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationFrequencyConfigFindUniqueOrThrowArgs} args - Arguments to find a EvaluationFrequencyConfig
     * @example
     * // Get one EvaluationFrequencyConfig
     * const evaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationFrequencyConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationFrequencyConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationFrequencyConfigClient<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvaluationFrequencyConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFrequencyConfigFindFirstArgs} args - Arguments to find a EvaluationFrequencyConfig
     * @example
     * // Get one EvaluationFrequencyConfig
     * const evaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationFrequencyConfigFindFirstArgs>(args?: SelectSubset<T, EvaluationFrequencyConfigFindFirstArgs<ExtArgs>>): Prisma__EvaluationFrequencyConfigClient<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvaluationFrequencyConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFrequencyConfigFindFirstOrThrowArgs} args - Arguments to find a EvaluationFrequencyConfig
     * @example
     * // Get one EvaluationFrequencyConfig
     * const evaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationFrequencyConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationFrequencyConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationFrequencyConfigClient<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EvaluationFrequencyConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFrequencyConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvaluationFrequencyConfigs
     * const evaluationFrequencyConfigs = await prisma.evaluationFrequencyConfig.findMany()
     * 
     * // Get first 10 EvaluationFrequencyConfigs
     * const evaluationFrequencyConfigs = await prisma.evaluationFrequencyConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationFrequencyConfigWithIdOnly = await prisma.evaluationFrequencyConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationFrequencyConfigFindManyArgs>(args?: SelectSubset<T, EvaluationFrequencyConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EvaluationFrequencyConfig.
     * @param {EvaluationFrequencyConfigCreateArgs} args - Arguments to create a EvaluationFrequencyConfig.
     * @example
     * // Create one EvaluationFrequencyConfig
     * const EvaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.create({
     *   data: {
     *     // ... data to create a EvaluationFrequencyConfig
     *   }
     * })
     * 
     */
    create<T extends EvaluationFrequencyConfigCreateArgs>(args: SelectSubset<T, EvaluationFrequencyConfigCreateArgs<ExtArgs>>): Prisma__EvaluationFrequencyConfigClient<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EvaluationFrequencyConfigs.
     * @param {EvaluationFrequencyConfigCreateManyArgs} args - Arguments to create many EvaluationFrequencyConfigs.
     * @example
     * // Create many EvaluationFrequencyConfigs
     * const evaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationFrequencyConfigCreateManyArgs>(args?: SelectSubset<T, EvaluationFrequencyConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvaluationFrequencyConfigs and returns the data saved in the database.
     * @param {EvaluationFrequencyConfigCreateManyAndReturnArgs} args - Arguments to create many EvaluationFrequencyConfigs.
     * @example
     * // Create many EvaluationFrequencyConfigs
     * const evaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvaluationFrequencyConfigs and only return the `id`
     * const evaluationFrequencyConfigWithIdOnly = await prisma.evaluationFrequencyConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationFrequencyConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationFrequencyConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EvaluationFrequencyConfig.
     * @param {EvaluationFrequencyConfigDeleteArgs} args - Arguments to delete one EvaluationFrequencyConfig.
     * @example
     * // Delete one EvaluationFrequencyConfig
     * const EvaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.delete({
     *   where: {
     *     // ... filter to delete one EvaluationFrequencyConfig
     *   }
     * })
     * 
     */
    delete<T extends EvaluationFrequencyConfigDeleteArgs>(args: SelectSubset<T, EvaluationFrequencyConfigDeleteArgs<ExtArgs>>): Prisma__EvaluationFrequencyConfigClient<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EvaluationFrequencyConfig.
     * @param {EvaluationFrequencyConfigUpdateArgs} args - Arguments to update one EvaluationFrequencyConfig.
     * @example
     * // Update one EvaluationFrequencyConfig
     * const evaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationFrequencyConfigUpdateArgs>(args: SelectSubset<T, EvaluationFrequencyConfigUpdateArgs<ExtArgs>>): Prisma__EvaluationFrequencyConfigClient<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EvaluationFrequencyConfigs.
     * @param {EvaluationFrequencyConfigDeleteManyArgs} args - Arguments to filter EvaluationFrequencyConfigs to delete.
     * @example
     * // Delete a few EvaluationFrequencyConfigs
     * const { count } = await prisma.evaluationFrequencyConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationFrequencyConfigDeleteManyArgs>(args?: SelectSubset<T, EvaluationFrequencyConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvaluationFrequencyConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFrequencyConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvaluationFrequencyConfigs
     * const evaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationFrequencyConfigUpdateManyArgs>(args: SelectSubset<T, EvaluationFrequencyConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvaluationFrequencyConfigs and returns the data updated in the database.
     * @param {EvaluationFrequencyConfigUpdateManyAndReturnArgs} args - Arguments to update many EvaluationFrequencyConfigs.
     * @example
     * // Update many EvaluationFrequencyConfigs
     * const evaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvaluationFrequencyConfigs and only return the `id`
     * const evaluationFrequencyConfigWithIdOnly = await prisma.evaluationFrequencyConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvaluationFrequencyConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationFrequencyConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EvaluationFrequencyConfig.
     * @param {EvaluationFrequencyConfigUpsertArgs} args - Arguments to update or create a EvaluationFrequencyConfig.
     * @example
     * // Update or create a EvaluationFrequencyConfig
     * const evaluationFrequencyConfig = await prisma.evaluationFrequencyConfig.upsert({
     *   create: {
     *     // ... data to create a EvaluationFrequencyConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvaluationFrequencyConfig we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationFrequencyConfigUpsertArgs>(args: SelectSubset<T, EvaluationFrequencyConfigUpsertArgs<ExtArgs>>): Prisma__EvaluationFrequencyConfigClient<$Result.GetResult<Prisma.$EvaluationFrequencyConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EvaluationFrequencyConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFrequencyConfigCountArgs} args - Arguments to filter EvaluationFrequencyConfigs to count.
     * @example
     * // Count the number of EvaluationFrequencyConfigs
     * const count = await prisma.evaluationFrequencyConfig.count({
     *   where: {
     *     // ... the filter for the EvaluationFrequencyConfigs we want to count
     *   }
     * })
    **/
    count<T extends EvaluationFrequencyConfigCountArgs>(
      args?: Subset<T, EvaluationFrequencyConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationFrequencyConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvaluationFrequencyConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFrequencyConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationFrequencyConfigAggregateArgs>(args: Subset<T, EvaluationFrequencyConfigAggregateArgs>): Prisma.PrismaPromise<GetEvaluationFrequencyConfigAggregateType<T>>

    /**
     * Group by EvaluationFrequencyConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFrequencyConfigGroupByArgs} args - Group by arguments.
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
      T extends EvaluationFrequencyConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationFrequencyConfigGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationFrequencyConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvaluationFrequencyConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationFrequencyConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvaluationFrequencyConfig model
   */
  readonly fields: EvaluationFrequencyConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvaluationFrequencyConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationFrequencyConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    norm<T extends NormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormDefaultArgs<ExtArgs>>): Prisma__NormClient<$Result.GetResult<Prisma.$NormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EvaluationFrequencyConfig model
   */
  interface EvaluationFrequencyConfigFieldRefs {
    readonly id: FieldRef<"EvaluationFrequencyConfig", 'Int'>
    readonly user_id: FieldRef<"EvaluationFrequencyConfig", 'Int'>
    readonly company_id: FieldRef<"EvaluationFrequencyConfig", 'Int'>
    readonly norm_id: FieldRef<"EvaluationFrequencyConfig", 'Int'>
    readonly frequency_days: FieldRef<"EvaluationFrequencyConfig", 'Int'>
    readonly created_at: FieldRef<"EvaluationFrequencyConfig", 'DateTime'>
    readonly updated_at: FieldRef<"EvaluationFrequencyConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EvaluationFrequencyConfig findUnique
   */
  export type EvaluationFrequencyConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationFrequencyConfig to fetch.
     */
    where: EvaluationFrequencyConfigWhereUniqueInput
  }

  /**
   * EvaluationFrequencyConfig findUniqueOrThrow
   */
  export type EvaluationFrequencyConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationFrequencyConfig to fetch.
     */
    where: EvaluationFrequencyConfigWhereUniqueInput
  }

  /**
   * EvaluationFrequencyConfig findFirst
   */
  export type EvaluationFrequencyConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationFrequencyConfig to fetch.
     */
    where?: EvaluationFrequencyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationFrequencyConfigs to fetch.
     */
    orderBy?: EvaluationFrequencyConfigOrderByWithRelationInput | EvaluationFrequencyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvaluationFrequencyConfigs.
     */
    cursor?: EvaluationFrequencyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationFrequencyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationFrequencyConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationFrequencyConfigs.
     */
    distinct?: EvaluationFrequencyConfigScalarFieldEnum | EvaluationFrequencyConfigScalarFieldEnum[]
  }

  /**
   * EvaluationFrequencyConfig findFirstOrThrow
   */
  export type EvaluationFrequencyConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationFrequencyConfig to fetch.
     */
    where?: EvaluationFrequencyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationFrequencyConfigs to fetch.
     */
    orderBy?: EvaluationFrequencyConfigOrderByWithRelationInput | EvaluationFrequencyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvaluationFrequencyConfigs.
     */
    cursor?: EvaluationFrequencyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationFrequencyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationFrequencyConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationFrequencyConfigs.
     */
    distinct?: EvaluationFrequencyConfigScalarFieldEnum | EvaluationFrequencyConfigScalarFieldEnum[]
  }

  /**
   * EvaluationFrequencyConfig findMany
   */
  export type EvaluationFrequencyConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationFrequencyConfigs to fetch.
     */
    where?: EvaluationFrequencyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationFrequencyConfigs to fetch.
     */
    orderBy?: EvaluationFrequencyConfigOrderByWithRelationInput | EvaluationFrequencyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvaluationFrequencyConfigs.
     */
    cursor?: EvaluationFrequencyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationFrequencyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationFrequencyConfigs.
     */
    skip?: number
    distinct?: EvaluationFrequencyConfigScalarFieldEnum | EvaluationFrequencyConfigScalarFieldEnum[]
  }

  /**
   * EvaluationFrequencyConfig create
   */
  export type EvaluationFrequencyConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a EvaluationFrequencyConfig.
     */
    data: XOR<EvaluationFrequencyConfigCreateInput, EvaluationFrequencyConfigUncheckedCreateInput>
  }

  /**
   * EvaluationFrequencyConfig createMany
   */
  export type EvaluationFrequencyConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvaluationFrequencyConfigs.
     */
    data: EvaluationFrequencyConfigCreateManyInput | EvaluationFrequencyConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvaluationFrequencyConfig createManyAndReturn
   */
  export type EvaluationFrequencyConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * The data used to create many EvaluationFrequencyConfigs.
     */
    data: EvaluationFrequencyConfigCreateManyInput | EvaluationFrequencyConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvaluationFrequencyConfig update
   */
  export type EvaluationFrequencyConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a EvaluationFrequencyConfig.
     */
    data: XOR<EvaluationFrequencyConfigUpdateInput, EvaluationFrequencyConfigUncheckedUpdateInput>
    /**
     * Choose, which EvaluationFrequencyConfig to update.
     */
    where: EvaluationFrequencyConfigWhereUniqueInput
  }

  /**
   * EvaluationFrequencyConfig updateMany
   */
  export type EvaluationFrequencyConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvaluationFrequencyConfigs.
     */
    data: XOR<EvaluationFrequencyConfigUpdateManyMutationInput, EvaluationFrequencyConfigUncheckedUpdateManyInput>
    /**
     * Filter which EvaluationFrequencyConfigs to update
     */
    where?: EvaluationFrequencyConfigWhereInput
    /**
     * Limit how many EvaluationFrequencyConfigs to update.
     */
    limit?: number
  }

  /**
   * EvaluationFrequencyConfig updateManyAndReturn
   */
  export type EvaluationFrequencyConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * The data used to update EvaluationFrequencyConfigs.
     */
    data: XOR<EvaluationFrequencyConfigUpdateManyMutationInput, EvaluationFrequencyConfigUncheckedUpdateManyInput>
    /**
     * Filter which EvaluationFrequencyConfigs to update
     */
    where?: EvaluationFrequencyConfigWhereInput
    /**
     * Limit how many EvaluationFrequencyConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvaluationFrequencyConfig upsert
   */
  export type EvaluationFrequencyConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the EvaluationFrequencyConfig to update in case it exists.
     */
    where: EvaluationFrequencyConfigWhereUniqueInput
    /**
     * In case the EvaluationFrequencyConfig found by the `where` argument doesn't exist, create a new EvaluationFrequencyConfig with this data.
     */
    create: XOR<EvaluationFrequencyConfigCreateInput, EvaluationFrequencyConfigUncheckedCreateInput>
    /**
     * In case the EvaluationFrequencyConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationFrequencyConfigUpdateInput, EvaluationFrequencyConfigUncheckedUpdateInput>
  }

  /**
   * EvaluationFrequencyConfig delete
   */
  export type EvaluationFrequencyConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
    /**
     * Filter which EvaluationFrequencyConfig to delete.
     */
    where: EvaluationFrequencyConfigWhereUniqueInput
  }

  /**
   * EvaluationFrequencyConfig deleteMany
   */
  export type EvaluationFrequencyConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvaluationFrequencyConfigs to delete
     */
    where?: EvaluationFrequencyConfigWhereInput
    /**
     * Limit how many EvaluationFrequencyConfigs to delete.
     */
    limit?: number
  }

  /**
   * EvaluationFrequencyConfig without action
   */
  export type EvaluationFrequencyConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationFrequencyConfig
     */
    select?: EvaluationFrequencyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationFrequencyConfig
     */
    omit?: EvaluationFrequencyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationFrequencyConfigInclude<ExtArgs> | null
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
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nit: 'nit',
    address: 'address',
    contact_name: 'contact_name',
    contact_email: 'contact_email',
    phone: 'phone'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const NormScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type NormScalarFieldEnum = (typeof NormScalarFieldEnum)[keyof typeof NormScalarFieldEnum]


  export const CompanyAuditorScalarFieldEnum: {
    company_id: 'company_id',
    user_id: 'user_id'
  };

  export type CompanyAuditorScalarFieldEnum = (typeof CompanyAuditorScalarFieldEnum)[keyof typeof CompanyAuditorScalarFieldEnum]


  export const CriterionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    norm_id: 'norm_id'
  };

  export type CriterionScalarFieldEnum = (typeof CriterionScalarFieldEnum)[keyof typeof CriterionScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    criterion_id: 'criterion_id'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const EvaluationScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    created_by: 'created_by',
    created_at: 'created_at',
    norm_id: 'norm_id',
    observations: 'observations'
  };

  export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum]


  export const EvaluationVersionScalarFieldEnum: {
    id: 'id',
    evaluation_id: 'evaluation_id',
    created_by: 'created_by',
    created_at: 'created_at',
    is_latest: 'is_latest',
    status: 'status',
    version_number: 'version_number',
    answered_questions: 'answered_questions',
    total_questions: 'total_questions',
    completion_percentage: 'completion_percentage',
    score: 'score'
  };

  export type EvaluationVersionScalarFieldEnum = (typeof EvaluationVersionScalarFieldEnum)[keyof typeof EvaluationVersionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    question_id: 'question_id',
    version_id: 'version_id',
    response: 'response',
    created_by: 'created_by',
    created_at: 'created_at',
    score: 'score'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    created_by: 'created_by',
    answer_id: 'answer_id',
    created_at: 'created_at'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const EvidenceScalarFieldEnum: {
    id: 'id',
    answer_id: 'answer_id',
    url: 'url',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type EvidenceScalarFieldEnum = (typeof EvidenceScalarFieldEnum)[keyof typeof EvidenceScalarFieldEnum]


  export const EvaluationFrequencyConfigScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    company_id: 'company_id',
    norm_id: 'norm_id',
    frequency_days: 'frequency_days',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EvaluationFrequencyConfigScalarFieldEnum = (typeof EvaluationFrequencyConfigScalarFieldEnum)[keyof typeof EvaluationFrequencyConfigScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    evaluations?: EvaluationListRelationFilter
    versionsCreated?: EvaluationVersionListRelationFilter
    answers?: AnswerListRelationFilter
    evidences?: EvidenceListRelationFilter
    comments?: CommentListRelationFilter
    companyAuditors?: CompanyAuditorListRelationFilter
    frequencyConfigs?: EvaluationFrequencyConfigListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    evaluations?: EvaluationOrderByRelationAggregateInput
    versionsCreated?: EvaluationVersionOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
    evidences?: EvidenceOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    companyAuditors?: CompanyAuditorOrderByRelationAggregateInput
    frequencyConfigs?: EvaluationFrequencyConfigOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    evaluations?: EvaluationListRelationFilter
    versionsCreated?: EvaluationVersionListRelationFilter
    answers?: AnswerListRelationFilter
    evidences?: EvidenceListRelationFilter
    comments?: CommentListRelationFilter
    companyAuditors?: CompanyAuditorListRelationFilter
    frequencyConfigs?: EvaluationFrequencyConfigListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    nit?: IntFilter<"Company"> | number
    address?: StringNullableFilter<"Company"> | string | null
    contact_name?: StringNullableFilter<"Company"> | string | null
    contact_email?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    evaluations?: EvaluationListRelationFilter
    editorUsers?: CompanyAuditorListRelationFilter
    frequencyConfigs?: EvaluationFrequencyConfigListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrderInput | SortOrder
    contact_name?: SortOrderInput | SortOrder
    contact_email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    evaluations?: EvaluationOrderByRelationAggregateInput
    editorUsers?: CompanyAuditorOrderByRelationAggregateInput
    frequencyConfigs?: EvaluationFrequencyConfigOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    nit?: IntFilter<"Company"> | number
    address?: StringNullableFilter<"Company"> | string | null
    contact_name?: StringNullableFilter<"Company"> | string | null
    contact_email?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    evaluations?: EvaluationListRelationFilter
    editorUsers?: CompanyAuditorListRelationFilter
    frequencyConfigs?: EvaluationFrequencyConfigListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrderInput | SortOrder
    contact_name?: SortOrderInput | SortOrder
    contact_email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    nit?: IntWithAggregatesFilter<"Company"> | number
    address?: StringNullableWithAggregatesFilter<"Company"> | string | null
    contact_name?: StringNullableWithAggregatesFilter<"Company"> | string | null
    contact_email?: StringNullableWithAggregatesFilter<"Company"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Company"> | string | null
  }

  export type NormWhereInput = {
    AND?: NormWhereInput | NormWhereInput[]
    OR?: NormWhereInput[]
    NOT?: NormWhereInput | NormWhereInput[]
    id?: IntFilter<"Norm"> | number
    code?: StringFilter<"Norm"> | string
    name?: StringNullableFilter<"Norm"> | string | null
    criteria?: CriterionListRelationFilter
    evaluations?: EvaluationListRelationFilter
    frequencyConfigs?: EvaluationFrequencyConfigListRelationFilter
  }

  export type NormOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    criteria?: CriterionOrderByRelationAggregateInput
    evaluations?: EvaluationOrderByRelationAggregateInput
    frequencyConfigs?: EvaluationFrequencyConfigOrderByRelationAggregateInput
  }

  export type NormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NormWhereInput | NormWhereInput[]
    OR?: NormWhereInput[]
    NOT?: NormWhereInput | NormWhereInput[]
    code?: StringFilter<"Norm"> | string
    name?: StringNullableFilter<"Norm"> | string | null
    criteria?: CriterionListRelationFilter
    evaluations?: EvaluationListRelationFilter
    frequencyConfigs?: EvaluationFrequencyConfigListRelationFilter
  }, "id">

  export type NormOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: NormCountOrderByAggregateInput
    _avg?: NormAvgOrderByAggregateInput
    _max?: NormMaxOrderByAggregateInput
    _min?: NormMinOrderByAggregateInput
    _sum?: NormSumOrderByAggregateInput
  }

  export type NormScalarWhereWithAggregatesInput = {
    AND?: NormScalarWhereWithAggregatesInput | NormScalarWhereWithAggregatesInput[]
    OR?: NormScalarWhereWithAggregatesInput[]
    NOT?: NormScalarWhereWithAggregatesInput | NormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Norm"> | number
    code?: StringWithAggregatesFilter<"Norm"> | string
    name?: StringNullableWithAggregatesFilter<"Norm"> | string | null
  }

  export type CompanyAuditorWhereInput = {
    AND?: CompanyAuditorWhereInput | CompanyAuditorWhereInput[]
    OR?: CompanyAuditorWhereInput[]
    NOT?: CompanyAuditorWhereInput | CompanyAuditorWhereInput[]
    company_id?: IntFilter<"CompanyAuditor"> | number
    user_id?: IntFilter<"CompanyAuditor"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompanyAuditorOrderByWithRelationInput = {
    company_id?: SortOrder
    user_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CompanyAuditorWhereUniqueInput = Prisma.AtLeast<{
    company_id_user_id?: CompanyAuditorCompany_idUser_idCompoundUniqueInput
    AND?: CompanyAuditorWhereInput | CompanyAuditorWhereInput[]
    OR?: CompanyAuditorWhereInput[]
    NOT?: CompanyAuditorWhereInput | CompanyAuditorWhereInput[]
    company_id?: IntFilter<"CompanyAuditor"> | number
    user_id?: IntFilter<"CompanyAuditor"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "company_id_user_id">

  export type CompanyAuditorOrderByWithAggregationInput = {
    company_id?: SortOrder
    user_id?: SortOrder
    _count?: CompanyAuditorCountOrderByAggregateInput
    _avg?: CompanyAuditorAvgOrderByAggregateInput
    _max?: CompanyAuditorMaxOrderByAggregateInput
    _min?: CompanyAuditorMinOrderByAggregateInput
    _sum?: CompanyAuditorSumOrderByAggregateInput
  }

  export type CompanyAuditorScalarWhereWithAggregatesInput = {
    AND?: CompanyAuditorScalarWhereWithAggregatesInput | CompanyAuditorScalarWhereWithAggregatesInput[]
    OR?: CompanyAuditorScalarWhereWithAggregatesInput[]
    NOT?: CompanyAuditorScalarWhereWithAggregatesInput | CompanyAuditorScalarWhereWithAggregatesInput[]
    company_id?: IntWithAggregatesFilter<"CompanyAuditor"> | number
    user_id?: IntWithAggregatesFilter<"CompanyAuditor"> | number
  }

  export type CriterionWhereInput = {
    AND?: CriterionWhereInput | CriterionWhereInput[]
    OR?: CriterionWhereInput[]
    NOT?: CriterionWhereInput | CriterionWhereInput[]
    id?: IntFilter<"Criterion"> | number
    description?: StringNullableFilter<"Criterion"> | string | null
    norm_id?: IntFilter<"Criterion"> | number
    norm?: XOR<NormScalarRelationFilter, NormWhereInput>
    questions?: QuestionListRelationFilter
  }

  export type CriterionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    norm_id?: SortOrder
    norm?: NormOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type CriterionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CriterionWhereInput | CriterionWhereInput[]
    OR?: CriterionWhereInput[]
    NOT?: CriterionWhereInput | CriterionWhereInput[]
    description?: StringNullableFilter<"Criterion"> | string | null
    norm_id?: IntFilter<"Criterion"> | number
    norm?: XOR<NormScalarRelationFilter, NormWhereInput>
    questions?: QuestionListRelationFilter
  }, "id">

  export type CriterionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    norm_id?: SortOrder
    _count?: CriterionCountOrderByAggregateInput
    _avg?: CriterionAvgOrderByAggregateInput
    _max?: CriterionMaxOrderByAggregateInput
    _min?: CriterionMinOrderByAggregateInput
    _sum?: CriterionSumOrderByAggregateInput
  }

  export type CriterionScalarWhereWithAggregatesInput = {
    AND?: CriterionScalarWhereWithAggregatesInput | CriterionScalarWhereWithAggregatesInput[]
    OR?: CriterionScalarWhereWithAggregatesInput[]
    NOT?: CriterionScalarWhereWithAggregatesInput | CriterionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Criterion"> | number
    description?: StringNullableWithAggregatesFilter<"Criterion"> | string | null
    norm_id?: IntWithAggregatesFilter<"Criterion"> | number
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    text?: StringFilter<"Question"> | string
    criterion_id?: IntFilter<"Question"> | number
    criterion?: XOR<CriterionScalarRelationFilter, CriterionWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    criterion_id?: SortOrder
    criterion?: CriterionOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    criterion_id?: IntFilter<"Question"> | number
    criterion?: XOR<CriterionScalarRelationFilter, CriterionWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    criterion_id?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    text?: StringWithAggregatesFilter<"Question"> | string
    criterion_id?: IntWithAggregatesFilter<"Question"> | number
  }

  export type EvaluationWhereInput = {
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    id?: IntFilter<"Evaluation"> | number
    company_id?: IntFilter<"Evaluation"> | number
    created_by?: IntFilter<"Evaluation"> | number
    created_at?: DateTimeFilter<"Evaluation"> | Date | string
    norm_id?: IntFilter<"Evaluation"> | number
    observations?: StringNullableFilter<"Evaluation"> | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    norm?: XOR<NormScalarRelationFilter, NormWhereInput>
    versions?: EvaluationVersionListRelationFilter
  }

  export type EvaluationOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    norm_id?: SortOrder
    observations?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    norm?: NormOrderByWithRelationInput
    versions?: EvaluationVersionOrderByRelationAggregateInput
  }

  export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    company_id?: IntFilter<"Evaluation"> | number
    created_by?: IntFilter<"Evaluation"> | number
    created_at?: DateTimeFilter<"Evaluation"> | Date | string
    norm_id?: IntFilter<"Evaluation"> | number
    observations?: StringNullableFilter<"Evaluation"> | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    norm?: XOR<NormScalarRelationFilter, NormWhereInput>
    versions?: EvaluationVersionListRelationFilter
  }, "id">

  export type EvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    norm_id?: SortOrder
    observations?: SortOrderInput | SortOrder
    _count?: EvaluationCountOrderByAggregateInput
    _avg?: EvaluationAvgOrderByAggregateInput
    _max?: EvaluationMaxOrderByAggregateInput
    _min?: EvaluationMinOrderByAggregateInput
    _sum?: EvaluationSumOrderByAggregateInput
  }

  export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    OR?: EvaluationScalarWhereWithAggregatesInput[]
    NOT?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evaluation"> | number
    company_id?: IntWithAggregatesFilter<"Evaluation"> | number
    created_by?: IntWithAggregatesFilter<"Evaluation"> | number
    created_at?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
    norm_id?: IntWithAggregatesFilter<"Evaluation"> | number
    observations?: StringNullableWithAggregatesFilter<"Evaluation"> | string | null
  }

  export type EvaluationVersionWhereInput = {
    AND?: EvaluationVersionWhereInput | EvaluationVersionWhereInput[]
    OR?: EvaluationVersionWhereInput[]
    NOT?: EvaluationVersionWhereInput | EvaluationVersionWhereInput[]
    id?: IntFilter<"EvaluationVersion"> | number
    evaluation_id?: IntFilter<"EvaluationVersion"> | number
    created_by?: IntFilter<"EvaluationVersion"> | number
    created_at?: DateTimeFilter<"EvaluationVersion"> | Date | string
    is_latest?: BoolFilter<"EvaluationVersion"> | boolean
    status?: StringNullableFilter<"EvaluationVersion"> | string | null
    version_number?: IntNullableFilter<"EvaluationVersion"> | number | null
    answered_questions?: IntNullableFilter<"EvaluationVersion"> | number | null
    total_questions?: IntNullableFilter<"EvaluationVersion"> | number | null
    completion_percentage?: FloatNullableFilter<"EvaluationVersion"> | number | null
    score?: IntNullableFilter<"EvaluationVersion"> | number | null
    evaluation?: XOR<EvaluationScalarRelationFilter, EvaluationWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type EvaluationVersionOrderByWithRelationInput = {
    id?: SortOrder
    evaluation_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    is_latest?: SortOrder
    status?: SortOrderInput | SortOrder
    version_number?: SortOrderInput | SortOrder
    answered_questions?: SortOrderInput | SortOrder
    total_questions?: SortOrderInput | SortOrder
    completion_percentage?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    evaluation?: EvaluationOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type EvaluationVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EvaluationVersionWhereInput | EvaluationVersionWhereInput[]
    OR?: EvaluationVersionWhereInput[]
    NOT?: EvaluationVersionWhereInput | EvaluationVersionWhereInput[]
    evaluation_id?: IntFilter<"EvaluationVersion"> | number
    created_by?: IntFilter<"EvaluationVersion"> | number
    created_at?: DateTimeFilter<"EvaluationVersion"> | Date | string
    is_latest?: BoolFilter<"EvaluationVersion"> | boolean
    status?: StringNullableFilter<"EvaluationVersion"> | string | null
    version_number?: IntNullableFilter<"EvaluationVersion"> | number | null
    answered_questions?: IntNullableFilter<"EvaluationVersion"> | number | null
    total_questions?: IntNullableFilter<"EvaluationVersion"> | number | null
    completion_percentage?: FloatNullableFilter<"EvaluationVersion"> | number | null
    score?: IntNullableFilter<"EvaluationVersion"> | number | null
    evaluation?: XOR<EvaluationScalarRelationFilter, EvaluationWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type EvaluationVersionOrderByWithAggregationInput = {
    id?: SortOrder
    evaluation_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    is_latest?: SortOrder
    status?: SortOrderInput | SortOrder
    version_number?: SortOrderInput | SortOrder
    answered_questions?: SortOrderInput | SortOrder
    total_questions?: SortOrderInput | SortOrder
    completion_percentage?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    _count?: EvaluationVersionCountOrderByAggregateInput
    _avg?: EvaluationVersionAvgOrderByAggregateInput
    _max?: EvaluationVersionMaxOrderByAggregateInput
    _min?: EvaluationVersionMinOrderByAggregateInput
    _sum?: EvaluationVersionSumOrderByAggregateInput
  }

  export type EvaluationVersionScalarWhereWithAggregatesInput = {
    AND?: EvaluationVersionScalarWhereWithAggregatesInput | EvaluationVersionScalarWhereWithAggregatesInput[]
    OR?: EvaluationVersionScalarWhereWithAggregatesInput[]
    NOT?: EvaluationVersionScalarWhereWithAggregatesInput | EvaluationVersionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EvaluationVersion"> | number
    evaluation_id?: IntWithAggregatesFilter<"EvaluationVersion"> | number
    created_by?: IntWithAggregatesFilter<"EvaluationVersion"> | number
    created_at?: DateTimeWithAggregatesFilter<"EvaluationVersion"> | Date | string
    is_latest?: BoolWithAggregatesFilter<"EvaluationVersion"> | boolean
    status?: StringNullableWithAggregatesFilter<"EvaluationVersion"> | string | null
    version_number?: IntNullableWithAggregatesFilter<"EvaluationVersion"> | number | null
    answered_questions?: IntNullableWithAggregatesFilter<"EvaluationVersion"> | number | null
    total_questions?: IntNullableWithAggregatesFilter<"EvaluationVersion"> | number | null
    completion_percentage?: FloatNullableWithAggregatesFilter<"EvaluationVersion"> | number | null
    score?: IntNullableWithAggregatesFilter<"EvaluationVersion"> | number | null
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: IntFilter<"Answer"> | number
    question_id?: IntFilter<"Answer"> | number
    version_id?: IntFilter<"Answer"> | number
    response?: StringNullableFilter<"Answer"> | string | null
    created_by?: IntFilter<"Answer"> | number
    created_at?: DateTimeFilter<"Answer"> | Date | string
    score?: IntNullableFilter<"Answer"> | number | null
    comments?: CommentListRelationFilter
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    evaluationVersion?: XOR<EvaluationVersionScalarRelationFilter, EvaluationVersionWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    evidences?: EvidenceListRelationFilter
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    question_id?: SortOrder
    version_id?: SortOrder
    response?: SortOrderInput | SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    score?: SortOrderInput | SortOrder
    comments?: CommentOrderByRelationAggregateInput
    question?: QuestionOrderByWithRelationInput
    evaluationVersion?: EvaluationVersionOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    evidences?: EvidenceOrderByRelationAggregateInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    question_id?: IntFilter<"Answer"> | number
    version_id?: IntFilter<"Answer"> | number
    response?: StringNullableFilter<"Answer"> | string | null
    created_by?: IntFilter<"Answer"> | number
    created_at?: DateTimeFilter<"Answer"> | Date | string
    score?: IntNullableFilter<"Answer"> | number | null
    comments?: CommentListRelationFilter
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    evaluationVersion?: XOR<EvaluationVersionScalarRelationFilter, EvaluationVersionWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    evidences?: EvidenceListRelationFilter
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    question_id?: SortOrder
    version_id?: SortOrder
    response?: SortOrderInput | SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    score?: SortOrderInput | SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Answer"> | number
    question_id?: IntWithAggregatesFilter<"Answer"> | number
    version_id?: IntWithAggregatesFilter<"Answer"> | number
    response?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    created_by?: IntWithAggregatesFilter<"Answer"> | number
    created_at?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    score?: IntNullableWithAggregatesFilter<"Answer"> | number | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    created_by?: IntFilter<"Comment"> | number
    answer_id?: IntFilter<"Comment"> | number
    created_at?: DateTimeFilter<"Comment"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    created_by?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
    creator?: UserOrderByWithRelationInput
    answer?: AnswerOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    text?: StringFilter<"Comment"> | string
    created_by?: IntFilter<"Comment"> | number
    answer_id?: IntFilter<"Comment"> | number
    created_at?: DateTimeFilter<"Comment"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    created_by?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    text?: StringWithAggregatesFilter<"Comment"> | string
    created_by?: IntWithAggregatesFilter<"Comment"> | number
    answer_id?: IntWithAggregatesFilter<"Comment"> | number
    created_at?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type EvidenceWhereInput = {
    AND?: EvidenceWhereInput | EvidenceWhereInput[]
    OR?: EvidenceWhereInput[]
    NOT?: EvidenceWhereInput | EvidenceWhereInput[]
    id?: IntFilter<"Evidence"> | number
    answer_id?: IntFilter<"Evidence"> | number
    url?: StringNullableListFilter<"Evidence">
    created_by?: IntFilter<"Evidence"> | number
    created_at?: DateTimeFilter<"Evidence"> | Date | string
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EvidenceOrderByWithRelationInput = {
    id?: SortOrder
    answer_id?: SortOrder
    url?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    answer?: AnswerOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type EvidenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EvidenceWhereInput | EvidenceWhereInput[]
    OR?: EvidenceWhereInput[]
    NOT?: EvidenceWhereInput | EvidenceWhereInput[]
    answer_id?: IntFilter<"Evidence"> | number
    url?: StringNullableListFilter<"Evidence">
    created_by?: IntFilter<"Evidence"> | number
    created_at?: DateTimeFilter<"Evidence"> | Date | string
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EvidenceOrderByWithAggregationInput = {
    id?: SortOrder
    answer_id?: SortOrder
    url?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    _count?: EvidenceCountOrderByAggregateInput
    _avg?: EvidenceAvgOrderByAggregateInput
    _max?: EvidenceMaxOrderByAggregateInput
    _min?: EvidenceMinOrderByAggregateInput
    _sum?: EvidenceSumOrderByAggregateInput
  }

  export type EvidenceScalarWhereWithAggregatesInput = {
    AND?: EvidenceScalarWhereWithAggregatesInput | EvidenceScalarWhereWithAggregatesInput[]
    OR?: EvidenceScalarWhereWithAggregatesInput[]
    NOT?: EvidenceScalarWhereWithAggregatesInput | EvidenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evidence"> | number
    answer_id?: IntWithAggregatesFilter<"Evidence"> | number
    url?: StringNullableListFilter<"Evidence">
    created_by?: IntWithAggregatesFilter<"Evidence"> | number
    created_at?: DateTimeWithAggregatesFilter<"Evidence"> | Date | string
  }

  export type EvaluationFrequencyConfigWhereInput = {
    AND?: EvaluationFrequencyConfigWhereInput | EvaluationFrequencyConfigWhereInput[]
    OR?: EvaluationFrequencyConfigWhereInput[]
    NOT?: EvaluationFrequencyConfigWhereInput | EvaluationFrequencyConfigWhereInput[]
    id?: IntFilter<"EvaluationFrequencyConfig"> | number
    user_id?: IntFilter<"EvaluationFrequencyConfig"> | number
    company_id?: IntFilter<"EvaluationFrequencyConfig"> | number
    norm_id?: IntFilter<"EvaluationFrequencyConfig"> | number
    frequency_days?: IntFilter<"EvaluationFrequencyConfig"> | number
    created_at?: DateTimeFilter<"EvaluationFrequencyConfig"> | Date | string
    updated_at?: DateTimeFilter<"EvaluationFrequencyConfig"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    norm?: XOR<NormScalarRelationFilter, NormWhereInput>
  }

  export type EvaluationFrequencyConfigOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    norm_id?: SortOrder
    frequency_days?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    norm?: NormOrderByWithRelationInput
  }

  export type EvaluationFrequencyConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_company_id_norm_id?: EvaluationFrequencyConfigUser_id_company_id_norm_idCompoundUniqueInput
    AND?: EvaluationFrequencyConfigWhereInput | EvaluationFrequencyConfigWhereInput[]
    OR?: EvaluationFrequencyConfigWhereInput[]
    NOT?: EvaluationFrequencyConfigWhereInput | EvaluationFrequencyConfigWhereInput[]
    user_id?: IntFilter<"EvaluationFrequencyConfig"> | number
    company_id?: IntFilter<"EvaluationFrequencyConfig"> | number
    norm_id?: IntFilter<"EvaluationFrequencyConfig"> | number
    frequency_days?: IntFilter<"EvaluationFrequencyConfig"> | number
    created_at?: DateTimeFilter<"EvaluationFrequencyConfig"> | Date | string
    updated_at?: DateTimeFilter<"EvaluationFrequencyConfig"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    norm?: XOR<NormScalarRelationFilter, NormWhereInput>
  }, "id" | "user_id_company_id_norm_id">

  export type EvaluationFrequencyConfigOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    norm_id?: SortOrder
    frequency_days?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EvaluationFrequencyConfigCountOrderByAggregateInput
    _avg?: EvaluationFrequencyConfigAvgOrderByAggregateInput
    _max?: EvaluationFrequencyConfigMaxOrderByAggregateInput
    _min?: EvaluationFrequencyConfigMinOrderByAggregateInput
    _sum?: EvaluationFrequencyConfigSumOrderByAggregateInput
  }

  export type EvaluationFrequencyConfigScalarWhereWithAggregatesInput = {
    AND?: EvaluationFrequencyConfigScalarWhereWithAggregatesInput | EvaluationFrequencyConfigScalarWhereWithAggregatesInput[]
    OR?: EvaluationFrequencyConfigScalarWhereWithAggregatesInput[]
    NOT?: EvaluationFrequencyConfigScalarWhereWithAggregatesInput | EvaluationFrequencyConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EvaluationFrequencyConfig"> | number
    user_id?: IntWithAggregatesFilter<"EvaluationFrequencyConfig"> | number
    company_id?: IntWithAggregatesFilter<"EvaluationFrequencyConfig"> | number
    norm_id?: IntWithAggregatesFilter<"EvaluationFrequencyConfig"> | number
    frequency_days?: IntWithAggregatesFilter<"EvaluationFrequencyConfig"> | number
    created_at?: DateTimeWithAggregatesFilter<"EvaluationFrequencyConfig"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"EvaluationFrequencyConfig"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionCreateNestedManyWithoutCreatorInput
    answers?: AnswerCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionUncheckedCreateNestedManyWithoutCreatorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorUncheckedCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUncheckedUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUncheckedUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateInput = {
    name: string
    nit: number
    address?: string | null
    contact_name?: string | null
    contact_email?: string | null
    phone?: string | null
    evaluations?: EvaluationCreateNestedManyWithoutCompanyInput
    editorUsers?: CompanyAuditorCreateNestedManyWithoutCompanyInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    nit: number
    address?: string | null
    contact_name?: string | null
    contact_email?: string | null
    phone?: string | null
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCompanyInput
    editorUsers?: CompanyAuditorUncheckedCreateNestedManyWithoutCompanyInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUpdateManyWithoutCompanyNestedInput
    editorUsers?: CompanyAuditorUpdateManyWithoutCompanyNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUncheckedUpdateManyWithoutCompanyNestedInput
    editorUsers?: CompanyAuditorUncheckedUpdateManyWithoutCompanyNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    nit: number
    address?: string | null
    contact_name?: string | null
    contact_email?: string | null
    phone?: string | null
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NormCreateInput = {
    code: string
    name?: string | null
    criteria?: CriterionCreateNestedManyWithoutNormInput
    evaluations?: EvaluationCreateNestedManyWithoutNormInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutNormInput
  }

  export type NormUncheckedCreateInput = {
    id?: number
    code: string
    name?: string | null
    criteria?: CriterionUncheckedCreateNestedManyWithoutNormInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutNormInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutNormInput
  }

  export type NormUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: CriterionUpdateManyWithoutNormNestedInput
    evaluations?: EvaluationUpdateManyWithoutNormNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutNormNestedInput
  }

  export type NormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: CriterionUncheckedUpdateManyWithoutNormNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutNormNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutNormNestedInput
  }

  export type NormCreateManyInput = {
    id?: number
    code: string
    name?: string | null
  }

  export type NormUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyAuditorCreateInput = {
    company: CompanyCreateNestedOneWithoutEditorUsersInput
    user: UserCreateNestedOneWithoutCompanyAuditorsInput
  }

  export type CompanyAuditorUncheckedCreateInput = {
    company_id: number
    user_id: number
  }

  export type CompanyAuditorUpdateInput = {
    company?: CompanyUpdateOneRequiredWithoutEditorUsersNestedInput
    user?: UserUpdateOneRequiredWithoutCompanyAuditorsNestedInput
  }

  export type CompanyAuditorUncheckedUpdateInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyAuditorCreateManyInput = {
    company_id: number
    user_id: number
  }

  export type CompanyAuditorUpdateManyMutationInput = {

  }

  export type CompanyAuditorUncheckedUpdateManyInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CriterionCreateInput = {
    description?: string | null
    norm: NormCreateNestedOneWithoutCriteriaInput
    questions?: QuestionCreateNestedManyWithoutCriterionInput
  }

  export type CriterionUncheckedCreateInput = {
    id?: number
    description?: string | null
    norm_id: number
    questions?: QuestionUncheckedCreateNestedManyWithoutCriterionInput
  }

  export type CriterionUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    norm?: NormUpdateOneRequiredWithoutCriteriaNestedInput
    questions?: QuestionUpdateManyWithoutCriterionNestedInput
  }

  export type CriterionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    norm_id?: IntFieldUpdateOperationsInput | number
    questions?: QuestionUncheckedUpdateManyWithoutCriterionNestedInput
  }

  export type CriterionCreateManyInput = {
    id?: number
    description?: string | null
    norm_id: number
  }

  export type CriterionUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CriterionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    norm_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateInput = {
    text: string
    criterion: CriterionCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    text: string
    criterion_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    criterion?: CriterionUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    criterion_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    text: string
    criterion_id: number
  }

  export type QuestionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    criterion_id?: IntFieldUpdateOperationsInput | number
  }

  export type EvaluationCreateInput = {
    created_at?: Date | string
    observations?: string | null
    company: CompanyCreateNestedOneWithoutEvaluationsInput
    creator: UserCreateNestedOneWithoutEvaluationsInput
    norm: NormCreateNestedOneWithoutEvaluationsInput
    versions?: EvaluationVersionCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateInput = {
    id?: number
    company_id: number
    created_by: number
    created_at?: Date | string
    norm_id: number
    observations?: string | null
    versions?: EvaluationVersionUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutEvaluationsNestedInput
    creator?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
    norm?: NormUpdateOneRequiredWithoutEvaluationsNestedInput
    versions?: EvaluationVersionUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: EvaluationVersionUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationCreateManyInput = {
    id?: number
    company_id: number
    created_by: number
    created_at?: Date | string
    norm_id: number
    observations?: string | null
  }

  export type EvaluationUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationVersionCreateInput = {
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
    evaluation: EvaluationCreateNestedOneWithoutVersionsInput
    creator: UserCreateNestedOneWithoutVersionsCreatedInput
    answers?: AnswerCreateNestedManyWithoutEvaluationVersionInput
  }

  export type EvaluationVersionUncheckedCreateInput = {
    id?: number
    evaluation_id: number
    created_by: number
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
    answers?: AnswerUncheckedCreateNestedManyWithoutEvaluationVersionInput
  }

  export type EvaluationVersionUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    evaluation?: EvaluationUpdateOneRequiredWithoutVersionsNestedInput
    creator?: UserUpdateOneRequiredWithoutVersionsCreatedNestedInput
    answers?: AnswerUpdateManyWithoutEvaluationVersionNestedInput
  }

  export type EvaluationVersionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: AnswerUncheckedUpdateManyWithoutEvaluationVersionNestedInput
  }

  export type EvaluationVersionCreateManyInput = {
    id?: number
    evaluation_id: number
    created_by: number
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
  }

  export type EvaluationVersionUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EvaluationVersionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnswerCreateInput = {
    response?: string | null
    created_at?: Date | string
    score?: number | null
    comments?: CommentCreateNestedManyWithoutAnswerInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    evaluationVersion: EvaluationVersionCreateNestedOneWithoutAnswersInput
    creator: UserCreateNestedOneWithoutAnswersInput
    evidences?: EvidenceCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: number
    question_id: number
    version_id: number
    response?: string | null
    created_by: number
    created_at?: Date | string
    score?: number | null
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    evaluationVersion?: EvaluationVersionUpdateOneRequiredWithoutAnswersNestedInput
    creator?: UserUpdateOneRequiredWithoutAnswersNestedInput
    evidences?: EvidenceUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerCreateManyInput = {
    id?: number
    question_id: number
    version_id: number
    response?: string | null
    created_by: number
    created_at?: Date | string
    score?: number | null
  }

  export type AnswerUpdateManyMutationInput = {
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentCreateInput = {
    text: string
    created_at?: Date | string
    creator: UserCreateNestedOneWithoutCommentsInput
    answer: AnswerCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    text: string
    created_by: number
    answer_id: number
    created_at?: Date | string
  }

  export type CommentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCommentsNestedInput
    answer?: AnswerUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    answer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    text: string
    created_by: number
    answer_id: number
    created_at?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    answer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceCreateInput = {
    url?: EvidenceCreateurlInput | string[]
    created_at?: Date | string
    answer: AnswerCreateNestedOneWithoutEvidencesInput
    creator: UserCreateNestedOneWithoutEvidencesInput
  }

  export type EvidenceUncheckedCreateInput = {
    id?: number
    answer_id: number
    url?: EvidenceCreateurlInput | string[]
    created_by: number
    created_at?: Date | string
  }

  export type EvidenceUpdateInput = {
    url?: EvidenceUpdateurlInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneRequiredWithoutEvidencesNestedInput
    creator?: UserUpdateOneRequiredWithoutEvidencesNestedInput
  }

  export type EvidenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    answer_id?: IntFieldUpdateOperationsInput | number
    url?: EvidenceUpdateurlInput | string[]
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceCreateManyInput = {
    id?: number
    answer_id: number
    url?: EvidenceCreateurlInput | string[]
    created_by: number
    created_at?: Date | string
  }

  export type EvidenceUpdateManyMutationInput = {
    url?: EvidenceUpdateurlInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    answer_id?: IntFieldUpdateOperationsInput | number
    url?: EvidenceUpdateurlInput | string[]
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationFrequencyConfigCreateInput = {
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutFrequencyConfigsInput
    company: CompanyCreateNestedOneWithoutFrequencyConfigsInput
    norm: NormCreateNestedOneWithoutFrequencyConfigsInput
  }

  export type EvaluationFrequencyConfigUncheckedCreateInput = {
    id?: number
    user_id: number
    company_id: number
    norm_id: number
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EvaluationFrequencyConfigUpdateInput = {
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFrequencyConfigsNestedInput
    company?: CompanyUpdateOneRequiredWithoutFrequencyConfigsNestedInput
    norm?: NormUpdateOneRequiredWithoutFrequencyConfigsNestedInput
  }

  export type EvaluationFrequencyConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    norm_id?: IntFieldUpdateOperationsInput | number
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationFrequencyConfigCreateManyInput = {
    id?: number
    user_id: number
    company_id: number
    norm_id: number
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EvaluationFrequencyConfigUpdateManyMutationInput = {
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationFrequencyConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    norm_id?: IntFieldUpdateOperationsInput | number
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EvaluationListRelationFilter = {
    every?: EvaluationWhereInput
    some?: EvaluationWhereInput
    none?: EvaluationWhereInput
  }

  export type EvaluationVersionListRelationFilter = {
    every?: EvaluationVersionWhereInput
    some?: EvaluationVersionWhereInput
    none?: EvaluationVersionWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type EvidenceListRelationFilter = {
    every?: EvidenceWhereInput
    some?: EvidenceWhereInput
    none?: EvidenceWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CompanyAuditorListRelationFilter = {
    every?: CompanyAuditorWhereInput
    some?: CompanyAuditorWhereInput
    none?: CompanyAuditorWhereInput
  }

  export type EvaluationFrequencyConfigListRelationFilter = {
    every?: EvaluationFrequencyConfigWhereInput
    some?: EvaluationFrequencyConfigWhereInput
    none?: EvaluationFrequencyConfigWhereInput
  }

  export type EvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvaluationVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvidenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyAuditorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvaluationFrequencyConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    contact_name?: SortOrder
    contact_email?: SortOrder
    phone?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    nit?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    contact_name?: SortOrder
    contact_email?: SortOrder
    phone?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    contact_name?: SortOrder
    contact_email?: SortOrder
    phone?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    nit?: SortOrder
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

  export type CriterionListRelationFilter = {
    every?: CriterionWhereInput
    some?: CriterionWhereInput
    none?: CriterionWhereInput
  }

  export type CriterionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NormCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type NormAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NormMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type NormMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type NormSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CompanyAuditorCompany_idUser_idCompoundUniqueInput = {
    company_id: number
    user_id: number
  }

  export type CompanyAuditorCountOrderByAggregateInput = {
    company_id?: SortOrder
    user_id?: SortOrder
  }

  export type CompanyAuditorAvgOrderByAggregateInput = {
    company_id?: SortOrder
    user_id?: SortOrder
  }

  export type CompanyAuditorMaxOrderByAggregateInput = {
    company_id?: SortOrder
    user_id?: SortOrder
  }

  export type CompanyAuditorMinOrderByAggregateInput = {
    company_id?: SortOrder
    user_id?: SortOrder
  }

  export type CompanyAuditorSumOrderByAggregateInput = {
    company_id?: SortOrder
    user_id?: SortOrder
  }

  export type NormScalarRelationFilter = {
    is?: NormWhereInput
    isNot?: NormWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CriterionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    norm_id?: SortOrder
  }

  export type CriterionAvgOrderByAggregateInput = {
    id?: SortOrder
    norm_id?: SortOrder
  }

  export type CriterionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    norm_id?: SortOrder
  }

  export type CriterionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    norm_id?: SortOrder
  }

  export type CriterionSumOrderByAggregateInput = {
    id?: SortOrder
    norm_id?: SortOrder
  }

  export type CriterionScalarRelationFilter = {
    is?: CriterionWhereInput
    isNot?: CriterionWhereInput
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    criterion_id?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    criterion_id?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    criterion_id?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    criterion_id?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    criterion_id?: SortOrder
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

  export type EvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    norm_id?: SortOrder
    observations?: SortOrder
  }

  export type EvaluationAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_by?: SortOrder
    norm_id?: SortOrder
  }

  export type EvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    norm_id?: SortOrder
    observations?: SortOrder
  }

  export type EvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    norm_id?: SortOrder
    observations?: SortOrder
  }

  export type EvaluationSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_by?: SortOrder
    norm_id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type EvaluationScalarRelationFilter = {
    is?: EvaluationWhereInput
    isNot?: EvaluationWhereInput
  }

  export type EvaluationVersionCountOrderByAggregateInput = {
    id?: SortOrder
    evaluation_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    is_latest?: SortOrder
    status?: SortOrder
    version_number?: SortOrder
    answered_questions?: SortOrder
    total_questions?: SortOrder
    completion_percentage?: SortOrder
    score?: SortOrder
  }

  export type EvaluationVersionAvgOrderByAggregateInput = {
    id?: SortOrder
    evaluation_id?: SortOrder
    created_by?: SortOrder
    version_number?: SortOrder
    answered_questions?: SortOrder
    total_questions?: SortOrder
    completion_percentage?: SortOrder
    score?: SortOrder
  }

  export type EvaluationVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    evaluation_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    is_latest?: SortOrder
    status?: SortOrder
    version_number?: SortOrder
    answered_questions?: SortOrder
    total_questions?: SortOrder
    completion_percentage?: SortOrder
    score?: SortOrder
  }

  export type EvaluationVersionMinOrderByAggregateInput = {
    id?: SortOrder
    evaluation_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    is_latest?: SortOrder
    status?: SortOrder
    version_number?: SortOrder
    answered_questions?: SortOrder
    total_questions?: SortOrder
    completion_percentage?: SortOrder
    score?: SortOrder
  }

  export type EvaluationVersionSumOrderByAggregateInput = {
    id?: SortOrder
    evaluation_id?: SortOrder
    created_by?: SortOrder
    version_number?: SortOrder
    answered_questions?: SortOrder
    total_questions?: SortOrder
    completion_percentage?: SortOrder
    score?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type EvaluationVersionScalarRelationFilter = {
    is?: EvaluationVersionWhereInput
    isNot?: EvaluationVersionWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    version_id?: SortOrder
    response?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    score?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    version_id?: SortOrder
    created_by?: SortOrder
    score?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    version_id?: SortOrder
    response?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    score?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    version_id?: SortOrder
    response?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    score?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    version_id?: SortOrder
    created_by?: SortOrder
    score?: SortOrder
  }

  export type AnswerScalarRelationFilter = {
    is?: AnswerWhereInput
    isNot?: AnswerWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_by?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    answer_id?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_by?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_by?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    answer_id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EvidenceCountOrderByAggregateInput = {
    id?: SortOrder
    answer_id?: SortOrder
    url?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type EvidenceAvgOrderByAggregateInput = {
    id?: SortOrder
    answer_id?: SortOrder
    created_by?: SortOrder
  }

  export type EvidenceMaxOrderByAggregateInput = {
    id?: SortOrder
    answer_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type EvidenceMinOrderByAggregateInput = {
    id?: SortOrder
    answer_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type EvidenceSumOrderByAggregateInput = {
    id?: SortOrder
    answer_id?: SortOrder
    created_by?: SortOrder
  }

  export type EvaluationFrequencyConfigUser_id_company_id_norm_idCompoundUniqueInput = {
    user_id: number
    company_id: number
    norm_id: number
  }

  export type EvaluationFrequencyConfigCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    norm_id?: SortOrder
    frequency_days?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EvaluationFrequencyConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    norm_id?: SortOrder
    frequency_days?: SortOrder
  }

  export type EvaluationFrequencyConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    norm_id?: SortOrder
    frequency_days?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EvaluationFrequencyConfigMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    norm_id?: SortOrder
    frequency_days?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EvaluationFrequencyConfigSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    norm_id?: SortOrder
    frequency_days?: SortOrder
  }

  export type EvaluationCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EvaluationCreateWithoutCreatorInput, EvaluationUncheckedCreateWithoutCreatorInput> | EvaluationCreateWithoutCreatorInput[] | EvaluationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCreatorInput | EvaluationCreateOrConnectWithoutCreatorInput[]
    createMany?: EvaluationCreateManyCreatorInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type EvaluationVersionCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EvaluationVersionCreateWithoutCreatorInput, EvaluationVersionUncheckedCreateWithoutCreatorInput> | EvaluationVersionCreateWithoutCreatorInput[] | EvaluationVersionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvaluationVersionCreateOrConnectWithoutCreatorInput | EvaluationVersionCreateOrConnectWithoutCreatorInput[]
    createMany?: EvaluationVersionCreateManyCreatorInputEnvelope
    connect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AnswerCreateWithoutCreatorInput, AnswerUncheckedCreateWithoutCreatorInput> | AnswerCreateWithoutCreatorInput[] | AnswerUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutCreatorInput | AnswerCreateOrConnectWithoutCreatorInput[]
    createMany?: AnswerCreateManyCreatorInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type EvidenceCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EvidenceCreateWithoutCreatorInput, EvidenceUncheckedCreateWithoutCreatorInput> | EvidenceCreateWithoutCreatorInput[] | EvidenceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutCreatorInput | EvidenceCreateOrConnectWithoutCreatorInput[]
    createMany?: EvidenceCreateManyCreatorInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CommentCreateWithoutCreatorInput, CommentUncheckedCreateWithoutCreatorInput> | CommentCreateWithoutCreatorInput[] | CommentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCreatorInput | CommentCreateOrConnectWithoutCreatorInput[]
    createMany?: CommentCreateManyCreatorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CompanyAuditorCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyAuditorCreateWithoutUserInput, CompanyAuditorUncheckedCreateWithoutUserInput> | CompanyAuditorCreateWithoutUserInput[] | CompanyAuditorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyAuditorCreateOrConnectWithoutUserInput | CompanyAuditorCreateOrConnectWithoutUserInput[]
    createMany?: CompanyAuditorCreateManyUserInputEnvelope
    connect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
  }

  export type EvaluationFrequencyConfigCreateNestedManyWithoutUserInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutUserInput, EvaluationFrequencyConfigUncheckedCreateWithoutUserInput> | EvaluationFrequencyConfigCreateWithoutUserInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutUserInput | EvaluationFrequencyConfigCreateOrConnectWithoutUserInput[]
    createMany?: EvaluationFrequencyConfigCreateManyUserInputEnvelope
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EvaluationCreateWithoutCreatorInput, EvaluationUncheckedCreateWithoutCreatorInput> | EvaluationCreateWithoutCreatorInput[] | EvaluationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCreatorInput | EvaluationCreateOrConnectWithoutCreatorInput[]
    createMany?: EvaluationCreateManyCreatorInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type EvaluationVersionUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EvaluationVersionCreateWithoutCreatorInput, EvaluationVersionUncheckedCreateWithoutCreatorInput> | EvaluationVersionCreateWithoutCreatorInput[] | EvaluationVersionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvaluationVersionCreateOrConnectWithoutCreatorInput | EvaluationVersionCreateOrConnectWithoutCreatorInput[]
    createMany?: EvaluationVersionCreateManyCreatorInputEnvelope
    connect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AnswerCreateWithoutCreatorInput, AnswerUncheckedCreateWithoutCreatorInput> | AnswerCreateWithoutCreatorInput[] | AnswerUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutCreatorInput | AnswerCreateOrConnectWithoutCreatorInput[]
    createMany?: AnswerCreateManyCreatorInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type EvidenceUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EvidenceCreateWithoutCreatorInput, EvidenceUncheckedCreateWithoutCreatorInput> | EvidenceCreateWithoutCreatorInput[] | EvidenceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutCreatorInput | EvidenceCreateOrConnectWithoutCreatorInput[]
    createMany?: EvidenceCreateManyCreatorInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CommentCreateWithoutCreatorInput, CommentUncheckedCreateWithoutCreatorInput> | CommentCreateWithoutCreatorInput[] | CommentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCreatorInput | CommentCreateOrConnectWithoutCreatorInput[]
    createMany?: CommentCreateManyCreatorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CompanyAuditorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyAuditorCreateWithoutUserInput, CompanyAuditorUncheckedCreateWithoutUserInput> | CompanyAuditorCreateWithoutUserInput[] | CompanyAuditorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyAuditorCreateOrConnectWithoutUserInput | CompanyAuditorCreateOrConnectWithoutUserInput[]
    createMany?: CompanyAuditorCreateManyUserInputEnvelope
    connect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
  }

  export type EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutUserInput, EvaluationFrequencyConfigUncheckedCreateWithoutUserInput> | EvaluationFrequencyConfigCreateWithoutUserInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutUserInput | EvaluationFrequencyConfigCreateOrConnectWithoutUserInput[]
    createMany?: EvaluationFrequencyConfigCreateManyUserInputEnvelope
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EvaluationUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EvaluationCreateWithoutCreatorInput, EvaluationUncheckedCreateWithoutCreatorInput> | EvaluationCreateWithoutCreatorInput[] | EvaluationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCreatorInput | EvaluationCreateOrConnectWithoutCreatorInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutCreatorInput | EvaluationUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EvaluationCreateManyCreatorInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutCreatorInput | EvaluationUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutCreatorInput | EvaluationUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type EvaluationVersionUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EvaluationVersionCreateWithoutCreatorInput, EvaluationVersionUncheckedCreateWithoutCreatorInput> | EvaluationVersionCreateWithoutCreatorInput[] | EvaluationVersionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvaluationVersionCreateOrConnectWithoutCreatorInput | EvaluationVersionCreateOrConnectWithoutCreatorInput[]
    upsert?: EvaluationVersionUpsertWithWhereUniqueWithoutCreatorInput | EvaluationVersionUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EvaluationVersionCreateManyCreatorInputEnvelope
    set?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    disconnect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    delete?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    connect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    update?: EvaluationVersionUpdateWithWhereUniqueWithoutCreatorInput | EvaluationVersionUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EvaluationVersionUpdateManyWithWhereWithoutCreatorInput | EvaluationVersionUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EvaluationVersionScalarWhereInput | EvaluationVersionScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AnswerCreateWithoutCreatorInput, AnswerUncheckedCreateWithoutCreatorInput> | AnswerCreateWithoutCreatorInput[] | AnswerUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutCreatorInput | AnswerCreateOrConnectWithoutCreatorInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutCreatorInput | AnswerUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AnswerCreateManyCreatorInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutCreatorInput | AnswerUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutCreatorInput | AnswerUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type EvidenceUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EvidenceCreateWithoutCreatorInput, EvidenceUncheckedCreateWithoutCreatorInput> | EvidenceCreateWithoutCreatorInput[] | EvidenceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutCreatorInput | EvidenceCreateOrConnectWithoutCreatorInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutCreatorInput | EvidenceUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EvidenceCreateManyCreatorInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutCreatorInput | EvidenceUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutCreatorInput | EvidenceUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CommentCreateWithoutCreatorInput, CommentUncheckedCreateWithoutCreatorInput> | CommentCreateWithoutCreatorInput[] | CommentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCreatorInput | CommentCreateOrConnectWithoutCreatorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCreatorInput | CommentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CommentCreateManyCreatorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCreatorInput | CommentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCreatorInput | CommentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CompanyAuditorUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyAuditorCreateWithoutUserInput, CompanyAuditorUncheckedCreateWithoutUserInput> | CompanyAuditorCreateWithoutUserInput[] | CompanyAuditorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyAuditorCreateOrConnectWithoutUserInput | CompanyAuditorCreateOrConnectWithoutUserInput[]
    upsert?: CompanyAuditorUpsertWithWhereUniqueWithoutUserInput | CompanyAuditorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyAuditorCreateManyUserInputEnvelope
    set?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    disconnect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    delete?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    connect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    update?: CompanyAuditorUpdateWithWhereUniqueWithoutUserInput | CompanyAuditorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyAuditorUpdateManyWithWhereWithoutUserInput | CompanyAuditorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyAuditorScalarWhereInput | CompanyAuditorScalarWhereInput[]
  }

  export type EvaluationFrequencyConfigUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutUserInput, EvaluationFrequencyConfigUncheckedCreateWithoutUserInput> | EvaluationFrequencyConfigCreateWithoutUserInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutUserInput | EvaluationFrequencyConfigCreateOrConnectWithoutUserInput[]
    upsert?: EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutUserInput | EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvaluationFrequencyConfigCreateManyUserInputEnvelope
    set?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    disconnect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    delete?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    update?: EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutUserInput | EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvaluationFrequencyConfigUpdateManyWithWhereWithoutUserInput | EvaluationFrequencyConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvaluationFrequencyConfigScalarWhereInput | EvaluationFrequencyConfigScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EvaluationUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EvaluationCreateWithoutCreatorInput, EvaluationUncheckedCreateWithoutCreatorInput> | EvaluationCreateWithoutCreatorInput[] | EvaluationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCreatorInput | EvaluationCreateOrConnectWithoutCreatorInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutCreatorInput | EvaluationUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EvaluationCreateManyCreatorInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutCreatorInput | EvaluationUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutCreatorInput | EvaluationUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type EvaluationVersionUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EvaluationVersionCreateWithoutCreatorInput, EvaluationVersionUncheckedCreateWithoutCreatorInput> | EvaluationVersionCreateWithoutCreatorInput[] | EvaluationVersionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvaluationVersionCreateOrConnectWithoutCreatorInput | EvaluationVersionCreateOrConnectWithoutCreatorInput[]
    upsert?: EvaluationVersionUpsertWithWhereUniqueWithoutCreatorInput | EvaluationVersionUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EvaluationVersionCreateManyCreatorInputEnvelope
    set?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    disconnect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    delete?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    connect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    update?: EvaluationVersionUpdateWithWhereUniqueWithoutCreatorInput | EvaluationVersionUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EvaluationVersionUpdateManyWithWhereWithoutCreatorInput | EvaluationVersionUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EvaluationVersionScalarWhereInput | EvaluationVersionScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AnswerCreateWithoutCreatorInput, AnswerUncheckedCreateWithoutCreatorInput> | AnswerCreateWithoutCreatorInput[] | AnswerUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutCreatorInput | AnswerCreateOrConnectWithoutCreatorInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutCreatorInput | AnswerUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AnswerCreateManyCreatorInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutCreatorInput | AnswerUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutCreatorInput | AnswerUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type EvidenceUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EvidenceCreateWithoutCreatorInput, EvidenceUncheckedCreateWithoutCreatorInput> | EvidenceCreateWithoutCreatorInput[] | EvidenceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutCreatorInput | EvidenceCreateOrConnectWithoutCreatorInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutCreatorInput | EvidenceUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EvidenceCreateManyCreatorInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutCreatorInput | EvidenceUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutCreatorInput | EvidenceUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CommentCreateWithoutCreatorInput, CommentUncheckedCreateWithoutCreatorInput> | CommentCreateWithoutCreatorInput[] | CommentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCreatorInput | CommentCreateOrConnectWithoutCreatorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCreatorInput | CommentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CommentCreateManyCreatorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCreatorInput | CommentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCreatorInput | CommentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CompanyAuditorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyAuditorCreateWithoutUserInput, CompanyAuditorUncheckedCreateWithoutUserInput> | CompanyAuditorCreateWithoutUserInput[] | CompanyAuditorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyAuditorCreateOrConnectWithoutUserInput | CompanyAuditorCreateOrConnectWithoutUserInput[]
    upsert?: CompanyAuditorUpsertWithWhereUniqueWithoutUserInput | CompanyAuditorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyAuditorCreateManyUserInputEnvelope
    set?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    disconnect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    delete?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    connect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    update?: CompanyAuditorUpdateWithWhereUniqueWithoutUserInput | CompanyAuditorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyAuditorUpdateManyWithWhereWithoutUserInput | CompanyAuditorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyAuditorScalarWhereInput | CompanyAuditorScalarWhereInput[]
  }

  export type EvaluationFrequencyConfigUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutUserInput, EvaluationFrequencyConfigUncheckedCreateWithoutUserInput> | EvaluationFrequencyConfigCreateWithoutUserInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutUserInput | EvaluationFrequencyConfigCreateOrConnectWithoutUserInput[]
    upsert?: EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutUserInput | EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvaluationFrequencyConfigCreateManyUserInputEnvelope
    set?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    disconnect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    delete?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    update?: EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutUserInput | EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvaluationFrequencyConfigUpdateManyWithWhereWithoutUserInput | EvaluationFrequencyConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvaluationFrequencyConfigScalarWhereInput | EvaluationFrequencyConfigScalarWhereInput[]
  }

  export type EvaluationCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EvaluationCreateWithoutCompanyInput, EvaluationUncheckedCreateWithoutCompanyInput> | EvaluationCreateWithoutCompanyInput[] | EvaluationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCompanyInput | EvaluationCreateOrConnectWithoutCompanyInput[]
    createMany?: EvaluationCreateManyCompanyInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type CompanyAuditorCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyAuditorCreateWithoutCompanyInput, CompanyAuditorUncheckedCreateWithoutCompanyInput> | CompanyAuditorCreateWithoutCompanyInput[] | CompanyAuditorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyAuditorCreateOrConnectWithoutCompanyInput | CompanyAuditorCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyAuditorCreateManyCompanyInputEnvelope
    connect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
  }

  export type EvaluationFrequencyConfigCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutCompanyInput, EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput> | EvaluationFrequencyConfigCreateWithoutCompanyInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutCompanyInput | EvaluationFrequencyConfigCreateOrConnectWithoutCompanyInput[]
    createMany?: EvaluationFrequencyConfigCreateManyCompanyInputEnvelope
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EvaluationCreateWithoutCompanyInput, EvaluationUncheckedCreateWithoutCompanyInput> | EvaluationCreateWithoutCompanyInput[] | EvaluationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCompanyInput | EvaluationCreateOrConnectWithoutCompanyInput[]
    createMany?: EvaluationCreateManyCompanyInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type CompanyAuditorUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyAuditorCreateWithoutCompanyInput, CompanyAuditorUncheckedCreateWithoutCompanyInput> | CompanyAuditorCreateWithoutCompanyInput[] | CompanyAuditorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyAuditorCreateOrConnectWithoutCompanyInput | CompanyAuditorCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyAuditorCreateManyCompanyInputEnvelope
    connect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
  }

  export type EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutCompanyInput, EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput> | EvaluationFrequencyConfigCreateWithoutCompanyInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutCompanyInput | EvaluationFrequencyConfigCreateOrConnectWithoutCompanyInput[]
    createMany?: EvaluationFrequencyConfigCreateManyCompanyInputEnvelope
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EvaluationUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EvaluationCreateWithoutCompanyInput, EvaluationUncheckedCreateWithoutCompanyInput> | EvaluationCreateWithoutCompanyInput[] | EvaluationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCompanyInput | EvaluationCreateOrConnectWithoutCompanyInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutCompanyInput | EvaluationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EvaluationCreateManyCompanyInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutCompanyInput | EvaluationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutCompanyInput | EvaluationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type CompanyAuditorUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyAuditorCreateWithoutCompanyInput, CompanyAuditorUncheckedCreateWithoutCompanyInput> | CompanyAuditorCreateWithoutCompanyInput[] | CompanyAuditorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyAuditorCreateOrConnectWithoutCompanyInput | CompanyAuditorCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyAuditorUpsertWithWhereUniqueWithoutCompanyInput | CompanyAuditorUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyAuditorCreateManyCompanyInputEnvelope
    set?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    disconnect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    delete?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    connect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    update?: CompanyAuditorUpdateWithWhereUniqueWithoutCompanyInput | CompanyAuditorUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyAuditorUpdateManyWithWhereWithoutCompanyInput | CompanyAuditorUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyAuditorScalarWhereInput | CompanyAuditorScalarWhereInput[]
  }

  export type EvaluationFrequencyConfigUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutCompanyInput, EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput> | EvaluationFrequencyConfigCreateWithoutCompanyInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutCompanyInput | EvaluationFrequencyConfigCreateOrConnectWithoutCompanyInput[]
    upsert?: EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutCompanyInput | EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EvaluationFrequencyConfigCreateManyCompanyInputEnvelope
    set?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    disconnect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    delete?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    update?: EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutCompanyInput | EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EvaluationFrequencyConfigUpdateManyWithWhereWithoutCompanyInput | EvaluationFrequencyConfigUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EvaluationFrequencyConfigScalarWhereInput | EvaluationFrequencyConfigScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EvaluationCreateWithoutCompanyInput, EvaluationUncheckedCreateWithoutCompanyInput> | EvaluationCreateWithoutCompanyInput[] | EvaluationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCompanyInput | EvaluationCreateOrConnectWithoutCompanyInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutCompanyInput | EvaluationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EvaluationCreateManyCompanyInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutCompanyInput | EvaluationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutCompanyInput | EvaluationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type CompanyAuditorUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyAuditorCreateWithoutCompanyInput, CompanyAuditorUncheckedCreateWithoutCompanyInput> | CompanyAuditorCreateWithoutCompanyInput[] | CompanyAuditorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyAuditorCreateOrConnectWithoutCompanyInput | CompanyAuditorCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyAuditorUpsertWithWhereUniqueWithoutCompanyInput | CompanyAuditorUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyAuditorCreateManyCompanyInputEnvelope
    set?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    disconnect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    delete?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    connect?: CompanyAuditorWhereUniqueInput | CompanyAuditorWhereUniqueInput[]
    update?: CompanyAuditorUpdateWithWhereUniqueWithoutCompanyInput | CompanyAuditorUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyAuditorUpdateManyWithWhereWithoutCompanyInput | CompanyAuditorUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyAuditorScalarWhereInput | CompanyAuditorScalarWhereInput[]
  }

  export type EvaluationFrequencyConfigUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutCompanyInput, EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput> | EvaluationFrequencyConfigCreateWithoutCompanyInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutCompanyInput | EvaluationFrequencyConfigCreateOrConnectWithoutCompanyInput[]
    upsert?: EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutCompanyInput | EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EvaluationFrequencyConfigCreateManyCompanyInputEnvelope
    set?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    disconnect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    delete?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    update?: EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutCompanyInput | EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EvaluationFrequencyConfigUpdateManyWithWhereWithoutCompanyInput | EvaluationFrequencyConfigUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EvaluationFrequencyConfigScalarWhereInput | EvaluationFrequencyConfigScalarWhereInput[]
  }

  export type CriterionCreateNestedManyWithoutNormInput = {
    create?: XOR<CriterionCreateWithoutNormInput, CriterionUncheckedCreateWithoutNormInput> | CriterionCreateWithoutNormInput[] | CriterionUncheckedCreateWithoutNormInput[]
    connectOrCreate?: CriterionCreateOrConnectWithoutNormInput | CriterionCreateOrConnectWithoutNormInput[]
    createMany?: CriterionCreateManyNormInputEnvelope
    connect?: CriterionWhereUniqueInput | CriterionWhereUniqueInput[]
  }

  export type EvaluationCreateNestedManyWithoutNormInput = {
    create?: XOR<EvaluationCreateWithoutNormInput, EvaluationUncheckedCreateWithoutNormInput> | EvaluationCreateWithoutNormInput[] | EvaluationUncheckedCreateWithoutNormInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutNormInput | EvaluationCreateOrConnectWithoutNormInput[]
    createMany?: EvaluationCreateManyNormInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type EvaluationFrequencyConfigCreateNestedManyWithoutNormInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutNormInput, EvaluationFrequencyConfigUncheckedCreateWithoutNormInput> | EvaluationFrequencyConfigCreateWithoutNormInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutNormInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutNormInput | EvaluationFrequencyConfigCreateOrConnectWithoutNormInput[]
    createMany?: EvaluationFrequencyConfigCreateManyNormInputEnvelope
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
  }

  export type CriterionUncheckedCreateNestedManyWithoutNormInput = {
    create?: XOR<CriterionCreateWithoutNormInput, CriterionUncheckedCreateWithoutNormInput> | CriterionCreateWithoutNormInput[] | CriterionUncheckedCreateWithoutNormInput[]
    connectOrCreate?: CriterionCreateOrConnectWithoutNormInput | CriterionCreateOrConnectWithoutNormInput[]
    createMany?: CriterionCreateManyNormInputEnvelope
    connect?: CriterionWhereUniqueInput | CriterionWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutNormInput = {
    create?: XOR<EvaluationCreateWithoutNormInput, EvaluationUncheckedCreateWithoutNormInput> | EvaluationCreateWithoutNormInput[] | EvaluationUncheckedCreateWithoutNormInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutNormInput | EvaluationCreateOrConnectWithoutNormInput[]
    createMany?: EvaluationCreateManyNormInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutNormInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutNormInput, EvaluationFrequencyConfigUncheckedCreateWithoutNormInput> | EvaluationFrequencyConfigCreateWithoutNormInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutNormInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutNormInput | EvaluationFrequencyConfigCreateOrConnectWithoutNormInput[]
    createMany?: EvaluationFrequencyConfigCreateManyNormInputEnvelope
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
  }

  export type CriterionUpdateManyWithoutNormNestedInput = {
    create?: XOR<CriterionCreateWithoutNormInput, CriterionUncheckedCreateWithoutNormInput> | CriterionCreateWithoutNormInput[] | CriterionUncheckedCreateWithoutNormInput[]
    connectOrCreate?: CriterionCreateOrConnectWithoutNormInput | CriterionCreateOrConnectWithoutNormInput[]
    upsert?: CriterionUpsertWithWhereUniqueWithoutNormInput | CriterionUpsertWithWhereUniqueWithoutNormInput[]
    createMany?: CriterionCreateManyNormInputEnvelope
    set?: CriterionWhereUniqueInput | CriterionWhereUniqueInput[]
    disconnect?: CriterionWhereUniqueInput | CriterionWhereUniqueInput[]
    delete?: CriterionWhereUniqueInput | CriterionWhereUniqueInput[]
    connect?: CriterionWhereUniqueInput | CriterionWhereUniqueInput[]
    update?: CriterionUpdateWithWhereUniqueWithoutNormInput | CriterionUpdateWithWhereUniqueWithoutNormInput[]
    updateMany?: CriterionUpdateManyWithWhereWithoutNormInput | CriterionUpdateManyWithWhereWithoutNormInput[]
    deleteMany?: CriterionScalarWhereInput | CriterionScalarWhereInput[]
  }

  export type EvaluationUpdateManyWithoutNormNestedInput = {
    create?: XOR<EvaluationCreateWithoutNormInput, EvaluationUncheckedCreateWithoutNormInput> | EvaluationCreateWithoutNormInput[] | EvaluationUncheckedCreateWithoutNormInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutNormInput | EvaluationCreateOrConnectWithoutNormInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutNormInput | EvaluationUpsertWithWhereUniqueWithoutNormInput[]
    createMany?: EvaluationCreateManyNormInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutNormInput | EvaluationUpdateWithWhereUniqueWithoutNormInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutNormInput | EvaluationUpdateManyWithWhereWithoutNormInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type EvaluationFrequencyConfigUpdateManyWithoutNormNestedInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutNormInput, EvaluationFrequencyConfigUncheckedCreateWithoutNormInput> | EvaluationFrequencyConfigCreateWithoutNormInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutNormInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutNormInput | EvaluationFrequencyConfigCreateOrConnectWithoutNormInput[]
    upsert?: EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutNormInput | EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutNormInput[]
    createMany?: EvaluationFrequencyConfigCreateManyNormInputEnvelope
    set?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    disconnect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    delete?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    update?: EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutNormInput | EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutNormInput[]
    updateMany?: EvaluationFrequencyConfigUpdateManyWithWhereWithoutNormInput | EvaluationFrequencyConfigUpdateManyWithWhereWithoutNormInput[]
    deleteMany?: EvaluationFrequencyConfigScalarWhereInput | EvaluationFrequencyConfigScalarWhereInput[]
  }

  export type CriterionUncheckedUpdateManyWithoutNormNestedInput = {
    create?: XOR<CriterionCreateWithoutNormInput, CriterionUncheckedCreateWithoutNormInput> | CriterionCreateWithoutNormInput[] | CriterionUncheckedCreateWithoutNormInput[]
    connectOrCreate?: CriterionCreateOrConnectWithoutNormInput | CriterionCreateOrConnectWithoutNormInput[]
    upsert?: CriterionUpsertWithWhereUniqueWithoutNormInput | CriterionUpsertWithWhereUniqueWithoutNormInput[]
    createMany?: CriterionCreateManyNormInputEnvelope
    set?: CriterionWhereUniqueInput | CriterionWhereUniqueInput[]
    disconnect?: CriterionWhereUniqueInput | CriterionWhereUniqueInput[]
    delete?: CriterionWhereUniqueInput | CriterionWhereUniqueInput[]
    connect?: CriterionWhereUniqueInput | CriterionWhereUniqueInput[]
    update?: CriterionUpdateWithWhereUniqueWithoutNormInput | CriterionUpdateWithWhereUniqueWithoutNormInput[]
    updateMany?: CriterionUpdateManyWithWhereWithoutNormInput | CriterionUpdateManyWithWhereWithoutNormInput[]
    deleteMany?: CriterionScalarWhereInput | CriterionScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutNormNestedInput = {
    create?: XOR<EvaluationCreateWithoutNormInput, EvaluationUncheckedCreateWithoutNormInput> | EvaluationCreateWithoutNormInput[] | EvaluationUncheckedCreateWithoutNormInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutNormInput | EvaluationCreateOrConnectWithoutNormInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutNormInput | EvaluationUpsertWithWhereUniqueWithoutNormInput[]
    createMany?: EvaluationCreateManyNormInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutNormInput | EvaluationUpdateWithWhereUniqueWithoutNormInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutNormInput | EvaluationUpdateManyWithWhereWithoutNormInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type EvaluationFrequencyConfigUncheckedUpdateManyWithoutNormNestedInput = {
    create?: XOR<EvaluationFrequencyConfigCreateWithoutNormInput, EvaluationFrequencyConfigUncheckedCreateWithoutNormInput> | EvaluationFrequencyConfigCreateWithoutNormInput[] | EvaluationFrequencyConfigUncheckedCreateWithoutNormInput[]
    connectOrCreate?: EvaluationFrequencyConfigCreateOrConnectWithoutNormInput | EvaluationFrequencyConfigCreateOrConnectWithoutNormInput[]
    upsert?: EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutNormInput | EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutNormInput[]
    createMany?: EvaluationFrequencyConfigCreateManyNormInputEnvelope
    set?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    disconnect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    delete?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    connect?: EvaluationFrequencyConfigWhereUniqueInput | EvaluationFrequencyConfigWhereUniqueInput[]
    update?: EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutNormInput | EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutNormInput[]
    updateMany?: EvaluationFrequencyConfigUpdateManyWithWhereWithoutNormInput | EvaluationFrequencyConfigUpdateManyWithWhereWithoutNormInput[]
    deleteMany?: EvaluationFrequencyConfigScalarWhereInput | EvaluationFrequencyConfigScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutEditorUsersInput = {
    create?: XOR<CompanyCreateWithoutEditorUsersInput, CompanyUncheckedCreateWithoutEditorUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEditorUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCompanyAuditorsInput = {
    create?: XOR<UserCreateWithoutCompanyAuditorsInput, UserUncheckedCreateWithoutCompanyAuditorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyAuditorsInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutEditorUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutEditorUsersInput, CompanyUncheckedCreateWithoutEditorUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEditorUsersInput
    upsert?: CompanyUpsertWithoutEditorUsersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutEditorUsersInput, CompanyUpdateWithoutEditorUsersInput>, CompanyUncheckedUpdateWithoutEditorUsersInput>
  }

  export type UserUpdateOneRequiredWithoutCompanyAuditorsNestedInput = {
    create?: XOR<UserCreateWithoutCompanyAuditorsInput, UserUncheckedCreateWithoutCompanyAuditorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyAuditorsInput
    upsert?: UserUpsertWithoutCompanyAuditorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyAuditorsInput, UserUpdateWithoutCompanyAuditorsInput>, UserUncheckedUpdateWithoutCompanyAuditorsInput>
  }

  export type NormCreateNestedOneWithoutCriteriaInput = {
    create?: XOR<NormCreateWithoutCriteriaInput, NormUncheckedCreateWithoutCriteriaInput>
    connectOrCreate?: NormCreateOrConnectWithoutCriteriaInput
    connect?: NormWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutCriterionInput = {
    create?: XOR<QuestionCreateWithoutCriterionInput, QuestionUncheckedCreateWithoutCriterionInput> | QuestionCreateWithoutCriterionInput[] | QuestionUncheckedCreateWithoutCriterionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCriterionInput | QuestionCreateOrConnectWithoutCriterionInput[]
    createMany?: QuestionCreateManyCriterionInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutCriterionInput = {
    create?: XOR<QuestionCreateWithoutCriterionInput, QuestionUncheckedCreateWithoutCriterionInput> | QuestionCreateWithoutCriterionInput[] | QuestionUncheckedCreateWithoutCriterionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCriterionInput | QuestionCreateOrConnectWithoutCriterionInput[]
    createMany?: QuestionCreateManyCriterionInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type NormUpdateOneRequiredWithoutCriteriaNestedInput = {
    create?: XOR<NormCreateWithoutCriteriaInput, NormUncheckedCreateWithoutCriteriaInput>
    connectOrCreate?: NormCreateOrConnectWithoutCriteriaInput
    upsert?: NormUpsertWithoutCriteriaInput
    connect?: NormWhereUniqueInput
    update?: XOR<XOR<NormUpdateToOneWithWhereWithoutCriteriaInput, NormUpdateWithoutCriteriaInput>, NormUncheckedUpdateWithoutCriteriaInput>
  }

  export type QuestionUpdateManyWithoutCriterionNestedInput = {
    create?: XOR<QuestionCreateWithoutCriterionInput, QuestionUncheckedCreateWithoutCriterionInput> | QuestionCreateWithoutCriterionInput[] | QuestionUncheckedCreateWithoutCriterionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCriterionInput | QuestionCreateOrConnectWithoutCriterionInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCriterionInput | QuestionUpsertWithWhereUniqueWithoutCriterionInput[]
    createMany?: QuestionCreateManyCriterionInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCriterionInput | QuestionUpdateWithWhereUniqueWithoutCriterionInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCriterionInput | QuestionUpdateManyWithWhereWithoutCriterionInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutCriterionNestedInput = {
    create?: XOR<QuestionCreateWithoutCriterionInput, QuestionUncheckedCreateWithoutCriterionInput> | QuestionCreateWithoutCriterionInput[] | QuestionUncheckedCreateWithoutCriterionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCriterionInput | QuestionCreateOrConnectWithoutCriterionInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCriterionInput | QuestionUpsertWithWhereUniqueWithoutCriterionInput[]
    createMany?: QuestionCreateManyCriterionInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCriterionInput | QuestionUpdateWithWhereUniqueWithoutCriterionInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCriterionInput | QuestionUpdateManyWithWhereWithoutCriterionInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type CriterionCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<CriterionCreateWithoutQuestionsInput, CriterionUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: CriterionCreateOrConnectWithoutQuestionsInput
    connect?: CriterionWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CriterionUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<CriterionCreateWithoutQuestionsInput, CriterionUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: CriterionCreateOrConnectWithoutQuestionsInput
    upsert?: CriterionUpsertWithoutQuestionsInput
    connect?: CriterionWhereUniqueInput
    update?: XOR<XOR<CriterionUpdateToOneWithWhereWithoutQuestionsInput, CriterionUpdateWithoutQuestionsInput>, CriterionUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<CompanyCreateWithoutEvaluationsInput, CompanyUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEvaluationsInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluationsInput
    connect?: UserWhereUniqueInput
  }

  export type NormCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<NormCreateWithoutEvaluationsInput, NormUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: NormCreateOrConnectWithoutEvaluationsInput
    connect?: NormWhereUniqueInput
  }

  export type EvaluationVersionCreateNestedManyWithoutEvaluationInput = {
    create?: XOR<EvaluationVersionCreateWithoutEvaluationInput, EvaluationVersionUncheckedCreateWithoutEvaluationInput> | EvaluationVersionCreateWithoutEvaluationInput[] | EvaluationVersionUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: EvaluationVersionCreateOrConnectWithoutEvaluationInput | EvaluationVersionCreateOrConnectWithoutEvaluationInput[]
    createMany?: EvaluationVersionCreateManyEvaluationInputEnvelope
    connect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
  }

  export type EvaluationVersionUncheckedCreateNestedManyWithoutEvaluationInput = {
    create?: XOR<EvaluationVersionCreateWithoutEvaluationInput, EvaluationVersionUncheckedCreateWithoutEvaluationInput> | EvaluationVersionCreateWithoutEvaluationInput[] | EvaluationVersionUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: EvaluationVersionCreateOrConnectWithoutEvaluationInput | EvaluationVersionCreateOrConnectWithoutEvaluationInput[]
    createMany?: EvaluationVersionCreateManyEvaluationInputEnvelope
    connect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanyUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<CompanyCreateWithoutEvaluationsInput, CompanyUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEvaluationsInput
    upsert?: CompanyUpsertWithoutEvaluationsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutEvaluationsInput, CompanyUpdateWithoutEvaluationsInput>, CompanyUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UserUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluationsInput
    upsert?: UserUpsertWithoutEvaluationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvaluationsInput, UserUpdateWithoutEvaluationsInput>, UserUncheckedUpdateWithoutEvaluationsInput>
  }

  export type NormUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<NormCreateWithoutEvaluationsInput, NormUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: NormCreateOrConnectWithoutEvaluationsInput
    upsert?: NormUpsertWithoutEvaluationsInput
    connect?: NormWhereUniqueInput
    update?: XOR<XOR<NormUpdateToOneWithWhereWithoutEvaluationsInput, NormUpdateWithoutEvaluationsInput>, NormUncheckedUpdateWithoutEvaluationsInput>
  }

  export type EvaluationVersionUpdateManyWithoutEvaluationNestedInput = {
    create?: XOR<EvaluationVersionCreateWithoutEvaluationInput, EvaluationVersionUncheckedCreateWithoutEvaluationInput> | EvaluationVersionCreateWithoutEvaluationInput[] | EvaluationVersionUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: EvaluationVersionCreateOrConnectWithoutEvaluationInput | EvaluationVersionCreateOrConnectWithoutEvaluationInput[]
    upsert?: EvaluationVersionUpsertWithWhereUniqueWithoutEvaluationInput | EvaluationVersionUpsertWithWhereUniqueWithoutEvaluationInput[]
    createMany?: EvaluationVersionCreateManyEvaluationInputEnvelope
    set?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    disconnect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    delete?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    connect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    update?: EvaluationVersionUpdateWithWhereUniqueWithoutEvaluationInput | EvaluationVersionUpdateWithWhereUniqueWithoutEvaluationInput[]
    updateMany?: EvaluationVersionUpdateManyWithWhereWithoutEvaluationInput | EvaluationVersionUpdateManyWithWhereWithoutEvaluationInput[]
    deleteMany?: EvaluationVersionScalarWhereInput | EvaluationVersionScalarWhereInput[]
  }

  export type EvaluationVersionUncheckedUpdateManyWithoutEvaluationNestedInput = {
    create?: XOR<EvaluationVersionCreateWithoutEvaluationInput, EvaluationVersionUncheckedCreateWithoutEvaluationInput> | EvaluationVersionCreateWithoutEvaluationInput[] | EvaluationVersionUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: EvaluationVersionCreateOrConnectWithoutEvaluationInput | EvaluationVersionCreateOrConnectWithoutEvaluationInput[]
    upsert?: EvaluationVersionUpsertWithWhereUniqueWithoutEvaluationInput | EvaluationVersionUpsertWithWhereUniqueWithoutEvaluationInput[]
    createMany?: EvaluationVersionCreateManyEvaluationInputEnvelope
    set?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    disconnect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    delete?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    connect?: EvaluationVersionWhereUniqueInput | EvaluationVersionWhereUniqueInput[]
    update?: EvaluationVersionUpdateWithWhereUniqueWithoutEvaluationInput | EvaluationVersionUpdateWithWhereUniqueWithoutEvaluationInput[]
    updateMany?: EvaluationVersionUpdateManyWithWhereWithoutEvaluationInput | EvaluationVersionUpdateManyWithWhereWithoutEvaluationInput[]
    deleteMany?: EvaluationVersionScalarWhereInput | EvaluationVersionScalarWhereInput[]
  }

  export type EvaluationCreateNestedOneWithoutVersionsInput = {
    create?: XOR<EvaluationCreateWithoutVersionsInput, EvaluationUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: EvaluationCreateOrConnectWithoutVersionsInput
    connect?: EvaluationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVersionsCreatedInput = {
    create?: XOR<UserCreateWithoutVersionsCreatedInput, UserUncheckedCreateWithoutVersionsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutVersionsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutEvaluationVersionInput = {
    create?: XOR<AnswerCreateWithoutEvaluationVersionInput, AnswerUncheckedCreateWithoutEvaluationVersionInput> | AnswerCreateWithoutEvaluationVersionInput[] | AnswerUncheckedCreateWithoutEvaluationVersionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutEvaluationVersionInput | AnswerCreateOrConnectWithoutEvaluationVersionInput[]
    createMany?: AnswerCreateManyEvaluationVersionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutEvaluationVersionInput = {
    create?: XOR<AnswerCreateWithoutEvaluationVersionInput, AnswerUncheckedCreateWithoutEvaluationVersionInput> | AnswerCreateWithoutEvaluationVersionInput[] | AnswerUncheckedCreateWithoutEvaluationVersionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutEvaluationVersionInput | AnswerCreateOrConnectWithoutEvaluationVersionInput[]
    createMany?: AnswerCreateManyEvaluationVersionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EvaluationUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<EvaluationCreateWithoutVersionsInput, EvaluationUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: EvaluationCreateOrConnectWithoutVersionsInput
    upsert?: EvaluationUpsertWithoutVersionsInput
    connect?: EvaluationWhereUniqueInput
    update?: XOR<XOR<EvaluationUpdateToOneWithWhereWithoutVersionsInput, EvaluationUpdateWithoutVersionsInput>, EvaluationUncheckedUpdateWithoutVersionsInput>
  }

  export type UserUpdateOneRequiredWithoutVersionsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutVersionsCreatedInput, UserUncheckedCreateWithoutVersionsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutVersionsCreatedInput
    upsert?: UserUpsertWithoutVersionsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVersionsCreatedInput, UserUpdateWithoutVersionsCreatedInput>, UserUncheckedUpdateWithoutVersionsCreatedInput>
  }

  export type AnswerUpdateManyWithoutEvaluationVersionNestedInput = {
    create?: XOR<AnswerCreateWithoutEvaluationVersionInput, AnswerUncheckedCreateWithoutEvaluationVersionInput> | AnswerCreateWithoutEvaluationVersionInput[] | AnswerUncheckedCreateWithoutEvaluationVersionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutEvaluationVersionInput | AnswerCreateOrConnectWithoutEvaluationVersionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutEvaluationVersionInput | AnswerUpsertWithWhereUniqueWithoutEvaluationVersionInput[]
    createMany?: AnswerCreateManyEvaluationVersionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutEvaluationVersionInput | AnswerUpdateWithWhereUniqueWithoutEvaluationVersionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutEvaluationVersionInput | AnswerUpdateManyWithWhereWithoutEvaluationVersionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutEvaluationVersionNestedInput = {
    create?: XOR<AnswerCreateWithoutEvaluationVersionInput, AnswerUncheckedCreateWithoutEvaluationVersionInput> | AnswerCreateWithoutEvaluationVersionInput[] | AnswerUncheckedCreateWithoutEvaluationVersionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutEvaluationVersionInput | AnswerCreateOrConnectWithoutEvaluationVersionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutEvaluationVersionInput | AnswerUpsertWithWhereUniqueWithoutEvaluationVersionInput[]
    createMany?: AnswerCreateManyEvaluationVersionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutEvaluationVersionInput | AnswerUpdateWithWhereUniqueWithoutEvaluationVersionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutEvaluationVersionInput | AnswerUpdateManyWithWhereWithoutEvaluationVersionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CommentCreateNestedManyWithoutAnswerInput = {
    create?: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput> | CommentCreateWithoutAnswerInput[] | CommentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAnswerInput | CommentCreateOrConnectWithoutAnswerInput[]
    createMany?: CommentCreateManyAnswerInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type EvaluationVersionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<EvaluationVersionCreateWithoutAnswersInput, EvaluationVersionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: EvaluationVersionCreateOrConnectWithoutAnswersInput
    connect?: EvaluationVersionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type EvidenceCreateNestedManyWithoutAnswerInput = {
    create?: XOR<EvidenceCreateWithoutAnswerInput, EvidenceUncheckedCreateWithoutAnswerInput> | EvidenceCreateWithoutAnswerInput[] | EvidenceUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutAnswerInput | EvidenceCreateOrConnectWithoutAnswerInput[]
    createMany?: EvidenceCreateManyAnswerInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput> | CommentCreateWithoutAnswerInput[] | CommentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAnswerInput | CommentCreateOrConnectWithoutAnswerInput[]
    createMany?: CommentCreateManyAnswerInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type EvidenceUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<EvidenceCreateWithoutAnswerInput, EvidenceUncheckedCreateWithoutAnswerInput> | EvidenceCreateWithoutAnswerInput[] | EvidenceUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutAnswerInput | EvidenceCreateOrConnectWithoutAnswerInput[]
    createMany?: EvidenceCreateManyAnswerInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type CommentUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput> | CommentCreateWithoutAnswerInput[] | CommentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAnswerInput | CommentCreateOrConnectWithoutAnswerInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAnswerInput | CommentUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: CommentCreateManyAnswerInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAnswerInput | CommentUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAnswerInput | CommentUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type EvaluationVersionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<EvaluationVersionCreateWithoutAnswersInput, EvaluationVersionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: EvaluationVersionCreateOrConnectWithoutAnswersInput
    upsert?: EvaluationVersionUpsertWithoutAnswersInput
    connect?: EvaluationVersionWhereUniqueInput
    update?: XOR<XOR<EvaluationVersionUpdateToOneWithWhereWithoutAnswersInput, EvaluationVersionUpdateWithoutAnswersInput>, EvaluationVersionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    upsert?: UserUpsertWithoutAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswersInput, UserUpdateWithoutAnswersInput>, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type EvidenceUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<EvidenceCreateWithoutAnswerInput, EvidenceUncheckedCreateWithoutAnswerInput> | EvidenceCreateWithoutAnswerInput[] | EvidenceUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutAnswerInput | EvidenceCreateOrConnectWithoutAnswerInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutAnswerInput | EvidenceUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: EvidenceCreateManyAnswerInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutAnswerInput | EvidenceUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutAnswerInput | EvidenceUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput> | CommentCreateWithoutAnswerInput[] | CommentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAnswerInput | CommentCreateOrConnectWithoutAnswerInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAnswerInput | CommentUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: CommentCreateManyAnswerInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAnswerInput | CommentUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAnswerInput | CommentUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type EvidenceUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<EvidenceCreateWithoutAnswerInput, EvidenceUncheckedCreateWithoutAnswerInput> | EvidenceCreateWithoutAnswerInput[] | EvidenceUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutAnswerInput | EvidenceCreateOrConnectWithoutAnswerInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutAnswerInput | EvidenceUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: EvidenceCreateManyAnswerInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutAnswerInput | EvidenceUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutAnswerInput | EvidenceUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerCreateNestedOneWithoutCommentsInput = {
    create?: XOR<AnswerCreateWithoutCommentsInput, AnswerUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutCommentsInput
    connect?: AnswerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type AnswerUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<AnswerCreateWithoutCommentsInput, AnswerUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutCommentsInput
    upsert?: AnswerUpsertWithoutCommentsInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutCommentsInput, AnswerUpdateWithoutCommentsInput>, AnswerUncheckedUpdateWithoutCommentsInput>
  }

  export type EvidenceCreateurlInput = {
    set: string[]
  }

  export type AnswerCreateNestedOneWithoutEvidencesInput = {
    create?: XOR<AnswerCreateWithoutEvidencesInput, AnswerUncheckedCreateWithoutEvidencesInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutEvidencesInput
    connect?: AnswerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEvidencesInput = {
    create?: XOR<UserCreateWithoutEvidencesInput, UserUncheckedCreateWithoutEvidencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvidencesInput
    connect?: UserWhereUniqueInput
  }

  export type EvidenceUpdateurlInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AnswerUpdateOneRequiredWithoutEvidencesNestedInput = {
    create?: XOR<AnswerCreateWithoutEvidencesInput, AnswerUncheckedCreateWithoutEvidencesInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutEvidencesInput
    upsert?: AnswerUpsertWithoutEvidencesInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutEvidencesInput, AnswerUpdateWithoutEvidencesInput>, AnswerUncheckedUpdateWithoutEvidencesInput>
  }

  export type UserUpdateOneRequiredWithoutEvidencesNestedInput = {
    create?: XOR<UserCreateWithoutEvidencesInput, UserUncheckedCreateWithoutEvidencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvidencesInput
    upsert?: UserUpsertWithoutEvidencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvidencesInput, UserUpdateWithoutEvidencesInput>, UserUncheckedUpdateWithoutEvidencesInput>
  }

  export type UserCreateNestedOneWithoutFrequencyConfigsInput = {
    create?: XOR<UserCreateWithoutFrequencyConfigsInput, UserUncheckedCreateWithoutFrequencyConfigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFrequencyConfigsInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutFrequencyConfigsInput = {
    create?: XOR<CompanyCreateWithoutFrequencyConfigsInput, CompanyUncheckedCreateWithoutFrequencyConfigsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFrequencyConfigsInput
    connect?: CompanyWhereUniqueInput
  }

  export type NormCreateNestedOneWithoutFrequencyConfigsInput = {
    create?: XOR<NormCreateWithoutFrequencyConfigsInput, NormUncheckedCreateWithoutFrequencyConfigsInput>
    connectOrCreate?: NormCreateOrConnectWithoutFrequencyConfigsInput
    connect?: NormWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFrequencyConfigsNestedInput = {
    create?: XOR<UserCreateWithoutFrequencyConfigsInput, UserUncheckedCreateWithoutFrequencyConfigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFrequencyConfigsInput
    upsert?: UserUpsertWithoutFrequencyConfigsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFrequencyConfigsInput, UserUpdateWithoutFrequencyConfigsInput>, UserUncheckedUpdateWithoutFrequencyConfigsInput>
  }

  export type CompanyUpdateOneRequiredWithoutFrequencyConfigsNestedInput = {
    create?: XOR<CompanyCreateWithoutFrequencyConfigsInput, CompanyUncheckedCreateWithoutFrequencyConfigsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFrequencyConfigsInput
    upsert?: CompanyUpsertWithoutFrequencyConfigsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutFrequencyConfigsInput, CompanyUpdateWithoutFrequencyConfigsInput>, CompanyUncheckedUpdateWithoutFrequencyConfigsInput>
  }

  export type NormUpdateOneRequiredWithoutFrequencyConfigsNestedInput = {
    create?: XOR<NormCreateWithoutFrequencyConfigsInput, NormUncheckedCreateWithoutFrequencyConfigsInput>
    connectOrCreate?: NormCreateOrConnectWithoutFrequencyConfigsInput
    upsert?: NormUpsertWithoutFrequencyConfigsInput
    connect?: NormWhereUniqueInput
    update?: XOR<XOR<NormUpdateToOneWithWhereWithoutFrequencyConfigsInput, NormUpdateWithoutFrequencyConfigsInput>, NormUncheckedUpdateWithoutFrequencyConfigsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EvaluationCreateWithoutCreatorInput = {
    created_at?: Date | string
    observations?: string | null
    company: CompanyCreateNestedOneWithoutEvaluationsInput
    norm: NormCreateNestedOneWithoutEvaluationsInput
    versions?: EvaluationVersionCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutCreatorInput = {
    id?: number
    company_id: number
    created_at?: Date | string
    norm_id: number
    observations?: string | null
    versions?: EvaluationVersionUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationCreateOrConnectWithoutCreatorInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutCreatorInput, EvaluationUncheckedCreateWithoutCreatorInput>
  }

  export type EvaluationCreateManyCreatorInputEnvelope = {
    data: EvaluationCreateManyCreatorInput | EvaluationCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationVersionCreateWithoutCreatorInput = {
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
    evaluation: EvaluationCreateNestedOneWithoutVersionsInput
    answers?: AnswerCreateNestedManyWithoutEvaluationVersionInput
  }

  export type EvaluationVersionUncheckedCreateWithoutCreatorInput = {
    id?: number
    evaluation_id: number
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
    answers?: AnswerUncheckedCreateNestedManyWithoutEvaluationVersionInput
  }

  export type EvaluationVersionCreateOrConnectWithoutCreatorInput = {
    where: EvaluationVersionWhereUniqueInput
    create: XOR<EvaluationVersionCreateWithoutCreatorInput, EvaluationVersionUncheckedCreateWithoutCreatorInput>
  }

  export type EvaluationVersionCreateManyCreatorInputEnvelope = {
    data: EvaluationVersionCreateManyCreatorInput | EvaluationVersionCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutCreatorInput = {
    response?: string | null
    created_at?: Date | string
    score?: number | null
    comments?: CommentCreateNestedManyWithoutAnswerInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    evaluationVersion: EvaluationVersionCreateNestedOneWithoutAnswersInput
    evidences?: EvidenceCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutCreatorInput = {
    id?: number
    question_id: number
    version_id: number
    response?: string | null
    created_at?: Date | string
    score?: number | null
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutCreatorInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutCreatorInput, AnswerUncheckedCreateWithoutCreatorInput>
  }

  export type AnswerCreateManyCreatorInputEnvelope = {
    data: AnswerCreateManyCreatorInput | AnswerCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type EvidenceCreateWithoutCreatorInput = {
    url?: EvidenceCreateurlInput | string[]
    created_at?: Date | string
    answer: AnswerCreateNestedOneWithoutEvidencesInput
  }

  export type EvidenceUncheckedCreateWithoutCreatorInput = {
    id?: number
    answer_id: number
    url?: EvidenceCreateurlInput | string[]
    created_at?: Date | string
  }

  export type EvidenceCreateOrConnectWithoutCreatorInput = {
    where: EvidenceWhereUniqueInput
    create: XOR<EvidenceCreateWithoutCreatorInput, EvidenceUncheckedCreateWithoutCreatorInput>
  }

  export type EvidenceCreateManyCreatorInputEnvelope = {
    data: EvidenceCreateManyCreatorInput | EvidenceCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutCreatorInput = {
    text: string
    created_at?: Date | string
    answer: AnswerCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutCreatorInput = {
    id?: number
    text: string
    answer_id: number
    created_at?: Date | string
  }

  export type CommentCreateOrConnectWithoutCreatorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCreatorInput, CommentUncheckedCreateWithoutCreatorInput>
  }

  export type CommentCreateManyCreatorInputEnvelope = {
    data: CommentCreateManyCreatorInput | CommentCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CompanyAuditorCreateWithoutUserInput = {
    company: CompanyCreateNestedOneWithoutEditorUsersInput
  }

  export type CompanyAuditorUncheckedCreateWithoutUserInput = {
    company_id: number
  }

  export type CompanyAuditorCreateOrConnectWithoutUserInput = {
    where: CompanyAuditorWhereUniqueInput
    create: XOR<CompanyAuditorCreateWithoutUserInput, CompanyAuditorUncheckedCreateWithoutUserInput>
  }

  export type CompanyAuditorCreateManyUserInputEnvelope = {
    data: CompanyAuditorCreateManyUserInput | CompanyAuditorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationFrequencyConfigCreateWithoutUserInput = {
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
    company: CompanyCreateNestedOneWithoutFrequencyConfigsInput
    norm: NormCreateNestedOneWithoutFrequencyConfigsInput
  }

  export type EvaluationFrequencyConfigUncheckedCreateWithoutUserInput = {
    id?: number
    company_id: number
    norm_id: number
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EvaluationFrequencyConfigCreateOrConnectWithoutUserInput = {
    where: EvaluationFrequencyConfigWhereUniqueInput
    create: XOR<EvaluationFrequencyConfigCreateWithoutUserInput, EvaluationFrequencyConfigUncheckedCreateWithoutUserInput>
  }

  export type EvaluationFrequencyConfigCreateManyUserInputEnvelope = {
    data: EvaluationFrequencyConfigCreateManyUserInput | EvaluationFrequencyConfigCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationUpsertWithWhereUniqueWithoutCreatorInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutCreatorInput, EvaluationUncheckedUpdateWithoutCreatorInput>
    create: XOR<EvaluationCreateWithoutCreatorInput, EvaluationUncheckedCreateWithoutCreatorInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutCreatorInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutCreatorInput, EvaluationUncheckedUpdateWithoutCreatorInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutCreatorInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutCreatorInput>
  }

  export type EvaluationScalarWhereInput = {
    AND?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    OR?: EvaluationScalarWhereInput[]
    NOT?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    id?: IntFilter<"Evaluation"> | number
    company_id?: IntFilter<"Evaluation"> | number
    created_by?: IntFilter<"Evaluation"> | number
    created_at?: DateTimeFilter<"Evaluation"> | Date | string
    norm_id?: IntFilter<"Evaluation"> | number
    observations?: StringNullableFilter<"Evaluation"> | string | null
  }

  export type EvaluationVersionUpsertWithWhereUniqueWithoutCreatorInput = {
    where: EvaluationVersionWhereUniqueInput
    update: XOR<EvaluationVersionUpdateWithoutCreatorInput, EvaluationVersionUncheckedUpdateWithoutCreatorInput>
    create: XOR<EvaluationVersionCreateWithoutCreatorInput, EvaluationVersionUncheckedCreateWithoutCreatorInput>
  }

  export type EvaluationVersionUpdateWithWhereUniqueWithoutCreatorInput = {
    where: EvaluationVersionWhereUniqueInput
    data: XOR<EvaluationVersionUpdateWithoutCreatorInput, EvaluationVersionUncheckedUpdateWithoutCreatorInput>
  }

  export type EvaluationVersionUpdateManyWithWhereWithoutCreatorInput = {
    where: EvaluationVersionScalarWhereInput
    data: XOR<EvaluationVersionUpdateManyMutationInput, EvaluationVersionUncheckedUpdateManyWithoutCreatorInput>
  }

  export type EvaluationVersionScalarWhereInput = {
    AND?: EvaluationVersionScalarWhereInput | EvaluationVersionScalarWhereInput[]
    OR?: EvaluationVersionScalarWhereInput[]
    NOT?: EvaluationVersionScalarWhereInput | EvaluationVersionScalarWhereInput[]
    id?: IntFilter<"EvaluationVersion"> | number
    evaluation_id?: IntFilter<"EvaluationVersion"> | number
    created_by?: IntFilter<"EvaluationVersion"> | number
    created_at?: DateTimeFilter<"EvaluationVersion"> | Date | string
    is_latest?: BoolFilter<"EvaluationVersion"> | boolean
    status?: StringNullableFilter<"EvaluationVersion"> | string | null
    version_number?: IntNullableFilter<"EvaluationVersion"> | number | null
    answered_questions?: IntNullableFilter<"EvaluationVersion"> | number | null
    total_questions?: IntNullableFilter<"EvaluationVersion"> | number | null
    completion_percentage?: FloatNullableFilter<"EvaluationVersion"> | number | null
    score?: IntNullableFilter<"EvaluationVersion"> | number | null
  }

  export type AnswerUpsertWithWhereUniqueWithoutCreatorInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutCreatorInput, AnswerUncheckedUpdateWithoutCreatorInput>
    create: XOR<AnswerCreateWithoutCreatorInput, AnswerUncheckedCreateWithoutCreatorInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutCreatorInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutCreatorInput, AnswerUncheckedUpdateWithoutCreatorInput>
  }

  export type AnswerUpdateManyWithWhereWithoutCreatorInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutCreatorInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: IntFilter<"Answer"> | number
    question_id?: IntFilter<"Answer"> | number
    version_id?: IntFilter<"Answer"> | number
    response?: StringNullableFilter<"Answer"> | string | null
    created_by?: IntFilter<"Answer"> | number
    created_at?: DateTimeFilter<"Answer"> | Date | string
    score?: IntNullableFilter<"Answer"> | number | null
  }

  export type EvidenceUpsertWithWhereUniqueWithoutCreatorInput = {
    where: EvidenceWhereUniqueInput
    update: XOR<EvidenceUpdateWithoutCreatorInput, EvidenceUncheckedUpdateWithoutCreatorInput>
    create: XOR<EvidenceCreateWithoutCreatorInput, EvidenceUncheckedCreateWithoutCreatorInput>
  }

  export type EvidenceUpdateWithWhereUniqueWithoutCreatorInput = {
    where: EvidenceWhereUniqueInput
    data: XOR<EvidenceUpdateWithoutCreatorInput, EvidenceUncheckedUpdateWithoutCreatorInput>
  }

  export type EvidenceUpdateManyWithWhereWithoutCreatorInput = {
    where: EvidenceScalarWhereInput
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyWithoutCreatorInput>
  }

  export type EvidenceScalarWhereInput = {
    AND?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
    OR?: EvidenceScalarWhereInput[]
    NOT?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
    id?: IntFilter<"Evidence"> | number
    answer_id?: IntFilter<"Evidence"> | number
    url?: StringNullableListFilter<"Evidence">
    created_by?: IntFilter<"Evidence"> | number
    created_at?: DateTimeFilter<"Evidence"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutCreatorInput, CommentUncheckedUpdateWithoutCreatorInput>
    create: XOR<CommentCreateWithoutCreatorInput, CommentUncheckedCreateWithoutCreatorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutCreatorInput, CommentUncheckedUpdateWithoutCreatorInput>
  }

  export type CommentUpdateManyWithWhereWithoutCreatorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    created_by?: IntFilter<"Comment"> | number
    answer_id?: IntFilter<"Comment"> | number
    created_at?: DateTimeFilter<"Comment"> | Date | string
  }

  export type CompanyAuditorUpsertWithWhereUniqueWithoutUserInput = {
    where: CompanyAuditorWhereUniqueInput
    update: XOR<CompanyAuditorUpdateWithoutUserInput, CompanyAuditorUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyAuditorCreateWithoutUserInput, CompanyAuditorUncheckedCreateWithoutUserInput>
  }

  export type CompanyAuditorUpdateWithWhereUniqueWithoutUserInput = {
    where: CompanyAuditorWhereUniqueInput
    data: XOR<CompanyAuditorUpdateWithoutUserInput, CompanyAuditorUncheckedUpdateWithoutUserInput>
  }

  export type CompanyAuditorUpdateManyWithWhereWithoutUserInput = {
    where: CompanyAuditorScalarWhereInput
    data: XOR<CompanyAuditorUpdateManyMutationInput, CompanyAuditorUncheckedUpdateManyWithoutUserInput>
  }

  export type CompanyAuditorScalarWhereInput = {
    AND?: CompanyAuditorScalarWhereInput | CompanyAuditorScalarWhereInput[]
    OR?: CompanyAuditorScalarWhereInput[]
    NOT?: CompanyAuditorScalarWhereInput | CompanyAuditorScalarWhereInput[]
    company_id?: IntFilter<"CompanyAuditor"> | number
    user_id?: IntFilter<"CompanyAuditor"> | number
  }

  export type EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutUserInput = {
    where: EvaluationFrequencyConfigWhereUniqueInput
    update: XOR<EvaluationFrequencyConfigUpdateWithoutUserInput, EvaluationFrequencyConfigUncheckedUpdateWithoutUserInput>
    create: XOR<EvaluationFrequencyConfigCreateWithoutUserInput, EvaluationFrequencyConfigUncheckedCreateWithoutUserInput>
  }

  export type EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutUserInput = {
    where: EvaluationFrequencyConfigWhereUniqueInput
    data: XOR<EvaluationFrequencyConfigUpdateWithoutUserInput, EvaluationFrequencyConfigUncheckedUpdateWithoutUserInput>
  }

  export type EvaluationFrequencyConfigUpdateManyWithWhereWithoutUserInput = {
    where: EvaluationFrequencyConfigScalarWhereInput
    data: XOR<EvaluationFrequencyConfigUpdateManyMutationInput, EvaluationFrequencyConfigUncheckedUpdateManyWithoutUserInput>
  }

  export type EvaluationFrequencyConfigScalarWhereInput = {
    AND?: EvaluationFrequencyConfigScalarWhereInput | EvaluationFrequencyConfigScalarWhereInput[]
    OR?: EvaluationFrequencyConfigScalarWhereInput[]
    NOT?: EvaluationFrequencyConfigScalarWhereInput | EvaluationFrequencyConfigScalarWhereInput[]
    id?: IntFilter<"EvaluationFrequencyConfig"> | number
    user_id?: IntFilter<"EvaluationFrequencyConfig"> | number
    company_id?: IntFilter<"EvaluationFrequencyConfig"> | number
    norm_id?: IntFilter<"EvaluationFrequencyConfig"> | number
    frequency_days?: IntFilter<"EvaluationFrequencyConfig"> | number
    created_at?: DateTimeFilter<"EvaluationFrequencyConfig"> | Date | string
    updated_at?: DateTimeFilter<"EvaluationFrequencyConfig"> | Date | string
  }

  export type EvaluationCreateWithoutCompanyInput = {
    created_at?: Date | string
    observations?: string | null
    creator: UserCreateNestedOneWithoutEvaluationsInput
    norm: NormCreateNestedOneWithoutEvaluationsInput
    versions?: EvaluationVersionCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutCompanyInput = {
    id?: number
    created_by: number
    created_at?: Date | string
    norm_id: number
    observations?: string | null
    versions?: EvaluationVersionUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationCreateOrConnectWithoutCompanyInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutCompanyInput, EvaluationUncheckedCreateWithoutCompanyInput>
  }

  export type EvaluationCreateManyCompanyInputEnvelope = {
    data: EvaluationCreateManyCompanyInput | EvaluationCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyAuditorCreateWithoutCompanyInput = {
    user: UserCreateNestedOneWithoutCompanyAuditorsInput
  }

  export type CompanyAuditorUncheckedCreateWithoutCompanyInput = {
    user_id: number
  }

  export type CompanyAuditorCreateOrConnectWithoutCompanyInput = {
    where: CompanyAuditorWhereUniqueInput
    create: XOR<CompanyAuditorCreateWithoutCompanyInput, CompanyAuditorUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyAuditorCreateManyCompanyInputEnvelope = {
    data: CompanyAuditorCreateManyCompanyInput | CompanyAuditorCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationFrequencyConfigCreateWithoutCompanyInput = {
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutFrequencyConfigsInput
    norm: NormCreateNestedOneWithoutFrequencyConfigsInput
  }

  export type EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput = {
    id?: number
    user_id: number
    norm_id: number
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EvaluationFrequencyConfigCreateOrConnectWithoutCompanyInput = {
    where: EvaluationFrequencyConfigWhereUniqueInput
    create: XOR<EvaluationFrequencyConfigCreateWithoutCompanyInput, EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput>
  }

  export type EvaluationFrequencyConfigCreateManyCompanyInputEnvelope = {
    data: EvaluationFrequencyConfigCreateManyCompanyInput | EvaluationFrequencyConfigCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationUpsertWithWhereUniqueWithoutCompanyInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutCompanyInput, EvaluationUncheckedUpdateWithoutCompanyInput>
    create: XOR<EvaluationCreateWithoutCompanyInput, EvaluationUncheckedCreateWithoutCompanyInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutCompanyInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutCompanyInput, EvaluationUncheckedUpdateWithoutCompanyInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutCompanyInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyAuditorUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyAuditorWhereUniqueInput
    update: XOR<CompanyAuditorUpdateWithoutCompanyInput, CompanyAuditorUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyAuditorCreateWithoutCompanyInput, CompanyAuditorUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyAuditorUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyAuditorWhereUniqueInput
    data: XOR<CompanyAuditorUpdateWithoutCompanyInput, CompanyAuditorUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyAuditorUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyAuditorScalarWhereInput
    data: XOR<CompanyAuditorUpdateManyMutationInput, CompanyAuditorUncheckedUpdateManyWithoutCompanyInput>
  }

  export type EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutCompanyInput = {
    where: EvaluationFrequencyConfigWhereUniqueInput
    update: XOR<EvaluationFrequencyConfigUpdateWithoutCompanyInput, EvaluationFrequencyConfigUncheckedUpdateWithoutCompanyInput>
    create: XOR<EvaluationFrequencyConfigCreateWithoutCompanyInput, EvaluationFrequencyConfigUncheckedCreateWithoutCompanyInput>
  }

  export type EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutCompanyInput = {
    where: EvaluationFrequencyConfigWhereUniqueInput
    data: XOR<EvaluationFrequencyConfigUpdateWithoutCompanyInput, EvaluationFrequencyConfigUncheckedUpdateWithoutCompanyInput>
  }

  export type EvaluationFrequencyConfigUpdateManyWithWhereWithoutCompanyInput = {
    where: EvaluationFrequencyConfigScalarWhereInput
    data: XOR<EvaluationFrequencyConfigUpdateManyMutationInput, EvaluationFrequencyConfigUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CriterionCreateWithoutNormInput = {
    description?: string | null
    questions?: QuestionCreateNestedManyWithoutCriterionInput
  }

  export type CriterionUncheckedCreateWithoutNormInput = {
    id?: number
    description?: string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutCriterionInput
  }

  export type CriterionCreateOrConnectWithoutNormInput = {
    where: CriterionWhereUniqueInput
    create: XOR<CriterionCreateWithoutNormInput, CriterionUncheckedCreateWithoutNormInput>
  }

  export type CriterionCreateManyNormInputEnvelope = {
    data: CriterionCreateManyNormInput | CriterionCreateManyNormInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationCreateWithoutNormInput = {
    created_at?: Date | string
    observations?: string | null
    company: CompanyCreateNestedOneWithoutEvaluationsInput
    creator: UserCreateNestedOneWithoutEvaluationsInput
    versions?: EvaluationVersionCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutNormInput = {
    id?: number
    company_id: number
    created_by: number
    created_at?: Date | string
    observations?: string | null
    versions?: EvaluationVersionUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationCreateOrConnectWithoutNormInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutNormInput, EvaluationUncheckedCreateWithoutNormInput>
  }

  export type EvaluationCreateManyNormInputEnvelope = {
    data: EvaluationCreateManyNormInput | EvaluationCreateManyNormInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationFrequencyConfigCreateWithoutNormInput = {
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutFrequencyConfigsInput
    company: CompanyCreateNestedOneWithoutFrequencyConfigsInput
  }

  export type EvaluationFrequencyConfigUncheckedCreateWithoutNormInput = {
    id?: number
    user_id: number
    company_id: number
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EvaluationFrequencyConfigCreateOrConnectWithoutNormInput = {
    where: EvaluationFrequencyConfigWhereUniqueInput
    create: XOR<EvaluationFrequencyConfigCreateWithoutNormInput, EvaluationFrequencyConfigUncheckedCreateWithoutNormInput>
  }

  export type EvaluationFrequencyConfigCreateManyNormInputEnvelope = {
    data: EvaluationFrequencyConfigCreateManyNormInput | EvaluationFrequencyConfigCreateManyNormInput[]
    skipDuplicates?: boolean
  }

  export type CriterionUpsertWithWhereUniqueWithoutNormInput = {
    where: CriterionWhereUniqueInput
    update: XOR<CriterionUpdateWithoutNormInput, CriterionUncheckedUpdateWithoutNormInput>
    create: XOR<CriterionCreateWithoutNormInput, CriterionUncheckedCreateWithoutNormInput>
  }

  export type CriterionUpdateWithWhereUniqueWithoutNormInput = {
    where: CriterionWhereUniqueInput
    data: XOR<CriterionUpdateWithoutNormInput, CriterionUncheckedUpdateWithoutNormInput>
  }

  export type CriterionUpdateManyWithWhereWithoutNormInput = {
    where: CriterionScalarWhereInput
    data: XOR<CriterionUpdateManyMutationInput, CriterionUncheckedUpdateManyWithoutNormInput>
  }

  export type CriterionScalarWhereInput = {
    AND?: CriterionScalarWhereInput | CriterionScalarWhereInput[]
    OR?: CriterionScalarWhereInput[]
    NOT?: CriterionScalarWhereInput | CriterionScalarWhereInput[]
    id?: IntFilter<"Criterion"> | number
    description?: StringNullableFilter<"Criterion"> | string | null
    norm_id?: IntFilter<"Criterion"> | number
  }

  export type EvaluationUpsertWithWhereUniqueWithoutNormInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutNormInput, EvaluationUncheckedUpdateWithoutNormInput>
    create: XOR<EvaluationCreateWithoutNormInput, EvaluationUncheckedCreateWithoutNormInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutNormInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutNormInput, EvaluationUncheckedUpdateWithoutNormInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutNormInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutNormInput>
  }

  export type EvaluationFrequencyConfigUpsertWithWhereUniqueWithoutNormInput = {
    where: EvaluationFrequencyConfigWhereUniqueInput
    update: XOR<EvaluationFrequencyConfigUpdateWithoutNormInput, EvaluationFrequencyConfigUncheckedUpdateWithoutNormInput>
    create: XOR<EvaluationFrequencyConfigCreateWithoutNormInput, EvaluationFrequencyConfigUncheckedCreateWithoutNormInput>
  }

  export type EvaluationFrequencyConfigUpdateWithWhereUniqueWithoutNormInput = {
    where: EvaluationFrequencyConfigWhereUniqueInput
    data: XOR<EvaluationFrequencyConfigUpdateWithoutNormInput, EvaluationFrequencyConfigUncheckedUpdateWithoutNormInput>
  }

  export type EvaluationFrequencyConfigUpdateManyWithWhereWithoutNormInput = {
    where: EvaluationFrequencyConfigScalarWhereInput
    data: XOR<EvaluationFrequencyConfigUpdateManyMutationInput, EvaluationFrequencyConfigUncheckedUpdateManyWithoutNormInput>
  }

  export type CompanyCreateWithoutEditorUsersInput = {
    name: string
    nit: number
    address?: string | null
    contact_name?: string | null
    contact_email?: string | null
    phone?: string | null
    evaluations?: EvaluationCreateNestedManyWithoutCompanyInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutEditorUsersInput = {
    id?: number
    name: string
    nit: number
    address?: string | null
    contact_name?: string | null
    contact_email?: string | null
    phone?: string | null
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCompanyInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutEditorUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutEditorUsersInput, CompanyUncheckedCreateWithoutEditorUsersInput>
  }

  export type UserCreateWithoutCompanyAuditorsInput = {
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionCreateNestedManyWithoutCreatorInput
    answers?: AnswerCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutCreatorInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyAuditorsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionUncheckedCreateNestedManyWithoutCreatorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatorInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyAuditorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyAuditorsInput, UserUncheckedCreateWithoutCompanyAuditorsInput>
  }

  export type CompanyUpsertWithoutEditorUsersInput = {
    update: XOR<CompanyUpdateWithoutEditorUsersInput, CompanyUncheckedUpdateWithoutEditorUsersInput>
    create: XOR<CompanyCreateWithoutEditorUsersInput, CompanyUncheckedCreateWithoutEditorUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutEditorUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutEditorUsersInput, CompanyUncheckedUpdateWithoutEditorUsersInput>
  }

  export type CompanyUpdateWithoutEditorUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUpdateManyWithoutCompanyNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutEditorUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUncheckedUpdateManyWithoutCompanyNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutCompanyAuditorsInput = {
    update: XOR<UserUpdateWithoutCompanyAuditorsInput, UserUncheckedUpdateWithoutCompanyAuditorsInput>
    create: XOR<UserCreateWithoutCompanyAuditorsInput, UserUncheckedCreateWithoutCompanyAuditorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyAuditorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyAuditorsInput, UserUncheckedUpdateWithoutCompanyAuditorsInput>
  }

  export type UserUpdateWithoutCompanyAuditorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutCreatorNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyAuditorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUncheckedUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatorNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NormCreateWithoutCriteriaInput = {
    code: string
    name?: string | null
    evaluations?: EvaluationCreateNestedManyWithoutNormInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutNormInput
  }

  export type NormUncheckedCreateWithoutCriteriaInput = {
    id?: number
    code: string
    name?: string | null
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutNormInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutNormInput
  }

  export type NormCreateOrConnectWithoutCriteriaInput = {
    where: NormWhereUniqueInput
    create: XOR<NormCreateWithoutCriteriaInput, NormUncheckedCreateWithoutCriteriaInput>
  }

  export type QuestionCreateWithoutCriterionInput = {
    text: string
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutCriterionInput = {
    id?: number
    text: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutCriterionInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCriterionInput, QuestionUncheckedCreateWithoutCriterionInput>
  }

  export type QuestionCreateManyCriterionInputEnvelope = {
    data: QuestionCreateManyCriterionInput | QuestionCreateManyCriterionInput[]
    skipDuplicates?: boolean
  }

  export type NormUpsertWithoutCriteriaInput = {
    update: XOR<NormUpdateWithoutCriteriaInput, NormUncheckedUpdateWithoutCriteriaInput>
    create: XOR<NormCreateWithoutCriteriaInput, NormUncheckedCreateWithoutCriteriaInput>
    where?: NormWhereInput
  }

  export type NormUpdateToOneWithWhereWithoutCriteriaInput = {
    where?: NormWhereInput
    data: XOR<NormUpdateWithoutCriteriaInput, NormUncheckedUpdateWithoutCriteriaInput>
  }

  export type NormUpdateWithoutCriteriaInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUpdateManyWithoutNormNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutNormNestedInput
  }

  export type NormUncheckedUpdateWithoutCriteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUncheckedUpdateManyWithoutNormNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutNormNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutCriterionInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutCriterionInput, QuestionUncheckedUpdateWithoutCriterionInput>
    create: XOR<QuestionCreateWithoutCriterionInput, QuestionUncheckedCreateWithoutCriterionInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutCriterionInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutCriterionInput, QuestionUncheckedUpdateWithoutCriterionInput>
  }

  export type QuestionUpdateManyWithWhereWithoutCriterionInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutCriterionInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    text?: StringFilter<"Question"> | string
    criterion_id?: IntFilter<"Question"> | number
  }

  export type CriterionCreateWithoutQuestionsInput = {
    description?: string | null
    norm: NormCreateNestedOneWithoutCriteriaInput
  }

  export type CriterionUncheckedCreateWithoutQuestionsInput = {
    id?: number
    description?: string | null
    norm_id: number
  }

  export type CriterionCreateOrConnectWithoutQuestionsInput = {
    where: CriterionWhereUniqueInput
    create: XOR<CriterionCreateWithoutQuestionsInput, CriterionUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    response?: string | null
    created_at?: Date | string
    score?: number | null
    comments?: CommentCreateNestedManyWithoutAnswerInput
    evaluationVersion: EvaluationVersionCreateNestedOneWithoutAnswersInput
    creator: UserCreateNestedOneWithoutAnswersInput
    evidences?: EvidenceCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: number
    version_id: number
    response?: string | null
    created_by: number
    created_at?: Date | string
    score?: number | null
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type CriterionUpsertWithoutQuestionsInput = {
    update: XOR<CriterionUpdateWithoutQuestionsInput, CriterionUncheckedUpdateWithoutQuestionsInput>
    create: XOR<CriterionCreateWithoutQuestionsInput, CriterionUncheckedCreateWithoutQuestionsInput>
    where?: CriterionWhereInput
  }

  export type CriterionUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: CriterionWhereInput
    data: XOR<CriterionUpdateWithoutQuestionsInput, CriterionUncheckedUpdateWithoutQuestionsInput>
  }

  export type CriterionUpdateWithoutQuestionsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    norm?: NormUpdateOneRequiredWithoutCriteriaNestedInput
  }

  export type CriterionUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    norm_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type CompanyCreateWithoutEvaluationsInput = {
    name: string
    nit: number
    address?: string | null
    contact_name?: string | null
    contact_email?: string | null
    phone?: string | null
    editorUsers?: CompanyAuditorCreateNestedManyWithoutCompanyInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutEvaluationsInput = {
    id?: number
    name: string
    nit: number
    address?: string | null
    contact_name?: string | null
    contact_email?: string | null
    phone?: string | null
    editorUsers?: CompanyAuditorUncheckedCreateNestedManyWithoutCompanyInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutEvaluationsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutEvaluationsInput, CompanyUncheckedCreateWithoutEvaluationsInput>
  }

  export type UserCreateWithoutEvaluationsInput = {
    name: string
    email: string
    password: string
    role: string
    versionsCreated?: EvaluationVersionCreateNestedManyWithoutCreatorInput
    answers?: AnswerCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvaluationsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    versionsCreated?: EvaluationVersionUncheckedCreateNestedManyWithoutCreatorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorUncheckedCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvaluationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
  }

  export type NormCreateWithoutEvaluationsInput = {
    code: string
    name?: string | null
    criteria?: CriterionCreateNestedManyWithoutNormInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutNormInput
  }

  export type NormUncheckedCreateWithoutEvaluationsInput = {
    id?: number
    code: string
    name?: string | null
    criteria?: CriterionUncheckedCreateNestedManyWithoutNormInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutNormInput
  }

  export type NormCreateOrConnectWithoutEvaluationsInput = {
    where: NormWhereUniqueInput
    create: XOR<NormCreateWithoutEvaluationsInput, NormUncheckedCreateWithoutEvaluationsInput>
  }

  export type EvaluationVersionCreateWithoutEvaluationInput = {
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
    creator: UserCreateNestedOneWithoutVersionsCreatedInput
    answers?: AnswerCreateNestedManyWithoutEvaluationVersionInput
  }

  export type EvaluationVersionUncheckedCreateWithoutEvaluationInput = {
    id?: number
    created_by: number
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
    answers?: AnswerUncheckedCreateNestedManyWithoutEvaluationVersionInput
  }

  export type EvaluationVersionCreateOrConnectWithoutEvaluationInput = {
    where: EvaluationVersionWhereUniqueInput
    create: XOR<EvaluationVersionCreateWithoutEvaluationInput, EvaluationVersionUncheckedCreateWithoutEvaluationInput>
  }

  export type EvaluationVersionCreateManyEvaluationInputEnvelope = {
    data: EvaluationVersionCreateManyEvaluationInput | EvaluationVersionCreateManyEvaluationInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutEvaluationsInput = {
    update: XOR<CompanyUpdateWithoutEvaluationsInput, CompanyUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<CompanyCreateWithoutEvaluationsInput, CompanyUncheckedCreateWithoutEvaluationsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutEvaluationsInput, CompanyUncheckedUpdateWithoutEvaluationsInput>
  }

  export type CompanyUpdateWithoutEvaluationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    editorUsers?: CompanyAuditorUpdateManyWithoutCompanyNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutEvaluationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    editorUsers?: CompanyAuditorUncheckedUpdateManyWithoutCompanyNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutEvaluationsInput = {
    update: XOR<UserUpdateWithoutEvaluationsInput, UserUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvaluationsInput, UserUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UserUpdateWithoutEvaluationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionsCreated?: EvaluationVersionUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvaluationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionsCreated?: EvaluationVersionUncheckedUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUncheckedUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NormUpsertWithoutEvaluationsInput = {
    update: XOR<NormUpdateWithoutEvaluationsInput, NormUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<NormCreateWithoutEvaluationsInput, NormUncheckedCreateWithoutEvaluationsInput>
    where?: NormWhereInput
  }

  export type NormUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: NormWhereInput
    data: XOR<NormUpdateWithoutEvaluationsInput, NormUncheckedUpdateWithoutEvaluationsInput>
  }

  export type NormUpdateWithoutEvaluationsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: CriterionUpdateManyWithoutNormNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutNormNestedInput
  }

  export type NormUncheckedUpdateWithoutEvaluationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: CriterionUncheckedUpdateManyWithoutNormNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutNormNestedInput
  }

  export type EvaluationVersionUpsertWithWhereUniqueWithoutEvaluationInput = {
    where: EvaluationVersionWhereUniqueInput
    update: XOR<EvaluationVersionUpdateWithoutEvaluationInput, EvaluationVersionUncheckedUpdateWithoutEvaluationInput>
    create: XOR<EvaluationVersionCreateWithoutEvaluationInput, EvaluationVersionUncheckedCreateWithoutEvaluationInput>
  }

  export type EvaluationVersionUpdateWithWhereUniqueWithoutEvaluationInput = {
    where: EvaluationVersionWhereUniqueInput
    data: XOR<EvaluationVersionUpdateWithoutEvaluationInput, EvaluationVersionUncheckedUpdateWithoutEvaluationInput>
  }

  export type EvaluationVersionUpdateManyWithWhereWithoutEvaluationInput = {
    where: EvaluationVersionScalarWhereInput
    data: XOR<EvaluationVersionUpdateManyMutationInput, EvaluationVersionUncheckedUpdateManyWithoutEvaluationInput>
  }

  export type EvaluationCreateWithoutVersionsInput = {
    created_at?: Date | string
    observations?: string | null
    company: CompanyCreateNestedOneWithoutEvaluationsInput
    creator: UserCreateNestedOneWithoutEvaluationsInput
    norm: NormCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateWithoutVersionsInput = {
    id?: number
    company_id: number
    created_by: number
    created_at?: Date | string
    norm_id: number
    observations?: string | null
  }

  export type EvaluationCreateOrConnectWithoutVersionsInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutVersionsInput, EvaluationUncheckedCreateWithoutVersionsInput>
  }

  export type UserCreateWithoutVersionsCreatedInput = {
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationCreateNestedManyWithoutCreatorInput
    answers?: AnswerCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVersionsCreatedInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCreatorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorUncheckedCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVersionsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVersionsCreatedInput, UserUncheckedCreateWithoutVersionsCreatedInput>
  }

  export type AnswerCreateWithoutEvaluationVersionInput = {
    response?: string | null
    created_at?: Date | string
    score?: number | null
    comments?: CommentCreateNestedManyWithoutAnswerInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    creator: UserCreateNestedOneWithoutAnswersInput
    evidences?: EvidenceCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutEvaluationVersionInput = {
    id?: number
    question_id: number
    response?: string | null
    created_by: number
    created_at?: Date | string
    score?: number | null
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutEvaluationVersionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutEvaluationVersionInput, AnswerUncheckedCreateWithoutEvaluationVersionInput>
  }

  export type AnswerCreateManyEvaluationVersionInputEnvelope = {
    data: AnswerCreateManyEvaluationVersionInput | AnswerCreateManyEvaluationVersionInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationUpsertWithoutVersionsInput = {
    update: XOR<EvaluationUpdateWithoutVersionsInput, EvaluationUncheckedUpdateWithoutVersionsInput>
    create: XOR<EvaluationCreateWithoutVersionsInput, EvaluationUncheckedCreateWithoutVersionsInput>
    where?: EvaluationWhereInput
  }

  export type EvaluationUpdateToOneWithWhereWithoutVersionsInput = {
    where?: EvaluationWhereInput
    data: XOR<EvaluationUpdateWithoutVersionsInput, EvaluationUncheckedUpdateWithoutVersionsInput>
  }

  export type EvaluationUpdateWithoutVersionsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutEvaluationsNestedInput
    creator?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
    norm?: NormUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutVersionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutVersionsCreatedInput = {
    update: XOR<UserUpdateWithoutVersionsCreatedInput, UserUncheckedUpdateWithoutVersionsCreatedInput>
    create: XOR<UserCreateWithoutVersionsCreatedInput, UserUncheckedCreateWithoutVersionsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVersionsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVersionsCreatedInput, UserUncheckedUpdateWithoutVersionsCreatedInput>
  }

  export type UserUpdateWithoutVersionsCreatedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVersionsCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUncheckedUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutEvaluationVersionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutEvaluationVersionInput, AnswerUncheckedUpdateWithoutEvaluationVersionInput>
    create: XOR<AnswerCreateWithoutEvaluationVersionInput, AnswerUncheckedCreateWithoutEvaluationVersionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutEvaluationVersionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutEvaluationVersionInput, AnswerUncheckedUpdateWithoutEvaluationVersionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutEvaluationVersionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutEvaluationVersionInput>
  }

  export type CommentCreateWithoutAnswerInput = {
    text: string
    created_at?: Date | string
    creator: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAnswerInput = {
    id?: number
    text: string
    created_by: number
    created_at?: Date | string
  }

  export type CommentCreateOrConnectWithoutAnswerInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput>
  }

  export type CommentCreateManyAnswerInputEnvelope = {
    data: CommentCreateManyAnswerInput | CommentCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutAnswersInput = {
    text: string
    criterion: CriterionCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: number
    text: string
    criterion_id: number
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type EvaluationVersionCreateWithoutAnswersInput = {
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
    evaluation: EvaluationCreateNestedOneWithoutVersionsInput
    creator: UserCreateNestedOneWithoutVersionsCreatedInput
  }

  export type EvaluationVersionUncheckedCreateWithoutAnswersInput = {
    id?: number
    evaluation_id: number
    created_by: number
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
  }

  export type EvaluationVersionCreateOrConnectWithoutAnswersInput = {
    where: EvaluationVersionWhereUniqueInput
    create: XOR<EvaluationVersionCreateWithoutAnswersInput, EvaluationVersionUncheckedCreateWithoutAnswersInput>
  }

  export type UserCreateWithoutAnswersInput = {
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnswersInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionUncheckedCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorUncheckedCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
  }

  export type EvidenceCreateWithoutAnswerInput = {
    url?: EvidenceCreateurlInput | string[]
    created_at?: Date | string
    creator: UserCreateNestedOneWithoutEvidencesInput
  }

  export type EvidenceUncheckedCreateWithoutAnswerInput = {
    id?: number
    url?: EvidenceCreateurlInput | string[]
    created_by: number
    created_at?: Date | string
  }

  export type EvidenceCreateOrConnectWithoutAnswerInput = {
    where: EvidenceWhereUniqueInput
    create: XOR<EvidenceCreateWithoutAnswerInput, EvidenceUncheckedCreateWithoutAnswerInput>
  }

  export type EvidenceCreateManyAnswerInputEnvelope = {
    data: EvidenceCreateManyAnswerInput | EvidenceCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutAnswerInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAnswerInput, CommentUncheckedUpdateWithoutAnswerInput>
    create: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAnswerInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAnswerInput, CommentUncheckedUpdateWithoutAnswerInput>
  }

  export type CommentUpdateManyWithWhereWithoutAnswerInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAnswerInput>
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    text?: StringFieldUpdateOperationsInput | string
    criterion?: CriterionUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    criterion_id?: IntFieldUpdateOperationsInput | number
  }

  export type EvaluationVersionUpsertWithoutAnswersInput = {
    update: XOR<EvaluationVersionUpdateWithoutAnswersInput, EvaluationVersionUncheckedUpdateWithoutAnswersInput>
    create: XOR<EvaluationVersionCreateWithoutAnswersInput, EvaluationVersionUncheckedCreateWithoutAnswersInput>
    where?: EvaluationVersionWhereInput
  }

  export type EvaluationVersionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: EvaluationVersionWhereInput
    data: XOR<EvaluationVersionUpdateWithoutAnswersInput, EvaluationVersionUncheckedUpdateWithoutAnswersInput>
  }

  export type EvaluationVersionUpdateWithoutAnswersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    evaluation?: EvaluationUpdateOneRequiredWithoutVersionsNestedInput
    creator?: UserUpdateOneRequiredWithoutVersionsCreatedNestedInput
  }

  export type EvaluationVersionUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateWithoutAnswersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUncheckedUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUncheckedUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EvidenceUpsertWithWhereUniqueWithoutAnswerInput = {
    where: EvidenceWhereUniqueInput
    update: XOR<EvidenceUpdateWithoutAnswerInput, EvidenceUncheckedUpdateWithoutAnswerInput>
    create: XOR<EvidenceCreateWithoutAnswerInput, EvidenceUncheckedCreateWithoutAnswerInput>
  }

  export type EvidenceUpdateWithWhereUniqueWithoutAnswerInput = {
    where: EvidenceWhereUniqueInput
    data: XOR<EvidenceUpdateWithoutAnswerInput, EvidenceUncheckedUpdateWithoutAnswerInput>
  }

  export type EvidenceUpdateManyWithWhereWithoutAnswerInput = {
    where: EvidenceScalarWhereInput
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyWithoutAnswerInput>
  }

  export type UserCreateWithoutCommentsInput = {
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionCreateNestedManyWithoutCreatorInput
    answers?: AnswerCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionUncheckedCreateNestedManyWithoutCreatorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorUncheckedCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type AnswerCreateWithoutCommentsInput = {
    response?: string | null
    created_at?: Date | string
    score?: number | null
    question: QuestionCreateNestedOneWithoutAnswersInput
    evaluationVersion: EvaluationVersionCreateNestedOneWithoutAnswersInput
    creator: UserCreateNestedOneWithoutAnswersInput
    evidences?: EvidenceCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutCommentsInput = {
    id?: number
    question_id: number
    version_id: number
    response?: string | null
    created_by: number
    created_at?: Date | string
    score?: number | null
    evidences?: EvidenceUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutCommentsInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutCommentsInput, AnswerUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUncheckedUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUncheckedUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnswerUpsertWithoutCommentsInput = {
    update: XOR<AnswerUpdateWithoutCommentsInput, AnswerUncheckedUpdateWithoutCommentsInput>
    create: XOR<AnswerCreateWithoutCommentsInput, AnswerUncheckedCreateWithoutCommentsInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutCommentsInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutCommentsInput, AnswerUncheckedUpdateWithoutCommentsInput>
  }

  export type AnswerUpdateWithoutCommentsInput = {
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    evaluationVersion?: EvaluationVersionUpdateOneRequiredWithoutAnswersNestedInput
    creator?: UserUpdateOneRequiredWithoutAnswersNestedInput
    evidences?: EvidenceUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    evidences?: EvidenceUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerCreateWithoutEvidencesInput = {
    response?: string | null
    created_at?: Date | string
    score?: number | null
    comments?: CommentCreateNestedManyWithoutAnswerInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    evaluationVersion: EvaluationVersionCreateNestedOneWithoutAnswersInput
    creator: UserCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutEvidencesInput = {
    id?: number
    question_id: number
    version_id: number
    response?: string | null
    created_by: number
    created_at?: Date | string
    score?: number | null
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutEvidencesInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutEvidencesInput, AnswerUncheckedCreateWithoutEvidencesInput>
  }

  export type UserCreateWithoutEvidencesInput = {
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionCreateNestedManyWithoutCreatorInput
    answers?: AnswerCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvidencesInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionUncheckedCreateNestedManyWithoutCreatorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorUncheckedCreateNestedManyWithoutUserInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvidencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvidencesInput, UserUncheckedCreateWithoutEvidencesInput>
  }

  export type AnswerUpsertWithoutEvidencesInput = {
    update: XOR<AnswerUpdateWithoutEvidencesInput, AnswerUncheckedUpdateWithoutEvidencesInput>
    create: XOR<AnswerCreateWithoutEvidencesInput, AnswerUncheckedCreateWithoutEvidencesInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutEvidencesInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutEvidencesInput, AnswerUncheckedUpdateWithoutEvidencesInput>
  }

  export type AnswerUpdateWithoutEvidencesInput = {
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    evaluationVersion?: EvaluationVersionUpdateOneRequiredWithoutAnswersNestedInput
    creator?: UserUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutEvidencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type UserUpsertWithoutEvidencesInput = {
    update: XOR<UserUpdateWithoutEvidencesInput, UserUncheckedUpdateWithoutEvidencesInput>
    create: XOR<UserCreateWithoutEvidencesInput, UserUncheckedCreateWithoutEvidencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvidencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvidencesInput, UserUncheckedUpdateWithoutEvidencesInput>
  }

  export type UserUpdateWithoutEvidencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvidencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUncheckedUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUncheckedUpdateManyWithoutUserNestedInput
    frequencyConfigs?: EvaluationFrequencyConfigUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFrequencyConfigsInput = {
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionCreateNestedManyWithoutCreatorInput
    answers?: AnswerCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFrequencyConfigsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCreatorInput
    versionsCreated?: EvaluationVersionUncheckedCreateNestedManyWithoutCreatorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutCreatorInput
    evidences?: EvidenceUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatorInput
    companyAuditors?: CompanyAuditorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFrequencyConfigsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFrequencyConfigsInput, UserUncheckedCreateWithoutFrequencyConfigsInput>
  }

  export type CompanyCreateWithoutFrequencyConfigsInput = {
    name: string
    nit: number
    address?: string | null
    contact_name?: string | null
    contact_email?: string | null
    phone?: string | null
    evaluations?: EvaluationCreateNestedManyWithoutCompanyInput
    editorUsers?: CompanyAuditorCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutFrequencyConfigsInput = {
    id?: number
    name: string
    nit: number
    address?: string | null
    contact_name?: string | null
    contact_email?: string | null
    phone?: string | null
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCompanyInput
    editorUsers?: CompanyAuditorUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutFrequencyConfigsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutFrequencyConfigsInput, CompanyUncheckedCreateWithoutFrequencyConfigsInput>
  }

  export type NormCreateWithoutFrequencyConfigsInput = {
    code: string
    name?: string | null
    criteria?: CriterionCreateNestedManyWithoutNormInput
    evaluations?: EvaluationCreateNestedManyWithoutNormInput
  }

  export type NormUncheckedCreateWithoutFrequencyConfigsInput = {
    id?: number
    code: string
    name?: string | null
    criteria?: CriterionUncheckedCreateNestedManyWithoutNormInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutNormInput
  }

  export type NormCreateOrConnectWithoutFrequencyConfigsInput = {
    where: NormWhereUniqueInput
    create: XOR<NormCreateWithoutFrequencyConfigsInput, NormUncheckedCreateWithoutFrequencyConfigsInput>
  }

  export type UserUpsertWithoutFrequencyConfigsInput = {
    update: XOR<UserUpdateWithoutFrequencyConfigsInput, UserUncheckedUpdateWithoutFrequencyConfigsInput>
    create: XOR<UserCreateWithoutFrequencyConfigsInput, UserUncheckedCreateWithoutFrequencyConfigsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFrequencyConfigsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFrequencyConfigsInput, UserUncheckedUpdateWithoutFrequencyConfigsInput>
  }

  export type UserUpdateWithoutFrequencyConfigsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFrequencyConfigsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutCreatorNestedInput
    versionsCreated?: EvaluationVersionUncheckedUpdateManyWithoutCreatorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutCreatorNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatorNestedInput
    companyAuditors?: CompanyAuditorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyUpsertWithoutFrequencyConfigsInput = {
    update: XOR<CompanyUpdateWithoutFrequencyConfigsInput, CompanyUncheckedUpdateWithoutFrequencyConfigsInput>
    create: XOR<CompanyCreateWithoutFrequencyConfigsInput, CompanyUncheckedCreateWithoutFrequencyConfigsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutFrequencyConfigsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutFrequencyConfigsInput, CompanyUncheckedUpdateWithoutFrequencyConfigsInput>
  }

  export type CompanyUpdateWithoutFrequencyConfigsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUpdateManyWithoutCompanyNestedInput
    editorUsers?: CompanyAuditorUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutFrequencyConfigsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUncheckedUpdateManyWithoutCompanyNestedInput
    editorUsers?: CompanyAuditorUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type NormUpsertWithoutFrequencyConfigsInput = {
    update: XOR<NormUpdateWithoutFrequencyConfigsInput, NormUncheckedUpdateWithoutFrequencyConfigsInput>
    create: XOR<NormCreateWithoutFrequencyConfigsInput, NormUncheckedCreateWithoutFrequencyConfigsInput>
    where?: NormWhereInput
  }

  export type NormUpdateToOneWithWhereWithoutFrequencyConfigsInput = {
    where?: NormWhereInput
    data: XOR<NormUpdateWithoutFrequencyConfigsInput, NormUncheckedUpdateWithoutFrequencyConfigsInput>
  }

  export type NormUpdateWithoutFrequencyConfigsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: CriterionUpdateManyWithoutNormNestedInput
    evaluations?: EvaluationUpdateManyWithoutNormNestedInput
  }

  export type NormUncheckedUpdateWithoutFrequencyConfigsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: CriterionUncheckedUpdateManyWithoutNormNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutNormNestedInput
  }

  export type EvaluationCreateManyCreatorInput = {
    id?: number
    company_id: number
    created_at?: Date | string
    norm_id: number
    observations?: string | null
  }

  export type EvaluationVersionCreateManyCreatorInput = {
    id?: number
    evaluation_id: number
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
  }

  export type AnswerCreateManyCreatorInput = {
    id?: number
    question_id: number
    version_id: number
    response?: string | null
    created_at?: Date | string
    score?: number | null
  }

  export type EvidenceCreateManyCreatorInput = {
    id?: number
    answer_id: number
    url?: EvidenceCreateurlInput | string[]
    created_at?: Date | string
  }

  export type CommentCreateManyCreatorInput = {
    id?: number
    text: string
    answer_id: number
    created_at?: Date | string
  }

  export type CompanyAuditorCreateManyUserInput = {
    company_id: number
  }

  export type EvaluationFrequencyConfigCreateManyUserInput = {
    id?: number
    company_id: number
    norm_id: number
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EvaluationUpdateWithoutCreatorInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutEvaluationsNestedInput
    norm?: NormUpdateOneRequiredWithoutEvaluationsNestedInput
    versions?: EvaluationVersionUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: EvaluationVersionUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationVersionUpdateWithoutCreatorInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    evaluation?: EvaluationUpdateOneRequiredWithoutVersionsNestedInput
    answers?: AnswerUpdateManyWithoutEvaluationVersionNestedInput
  }

  export type EvaluationVersionUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: AnswerUncheckedUpdateManyWithoutEvaluationVersionNestedInput
  }

  export type EvaluationVersionUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnswerUpdateWithoutCreatorInput = {
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    evaluationVersion?: EvaluationVersionUpdateOneRequiredWithoutAnswersNestedInput
    evidences?: EvidenceUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EvidenceUpdateWithoutCreatorInput = {
    url?: EvidenceUpdateurlInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneRequiredWithoutEvidencesNestedInput
  }

  export type EvidenceUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    answer_id?: IntFieldUpdateOperationsInput | number
    url?: EvidenceUpdateurlInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    answer_id?: IntFieldUpdateOperationsInput | number
    url?: EvidenceUpdateurlInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutCreatorInput = {
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    answer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    answer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyAuditorUpdateWithoutUserInput = {
    company?: CompanyUpdateOneRequiredWithoutEditorUsersNestedInput
  }

  export type CompanyAuditorUncheckedUpdateWithoutUserInput = {
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyAuditorUncheckedUpdateManyWithoutUserInput = {
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type EvaluationFrequencyConfigUpdateWithoutUserInput = {
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutFrequencyConfigsNestedInput
    norm?: NormUpdateOneRequiredWithoutFrequencyConfigsNestedInput
  }

  export type EvaluationFrequencyConfigUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    norm_id?: IntFieldUpdateOperationsInput | number
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationFrequencyConfigUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    norm_id?: IntFieldUpdateOperationsInput | number
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateManyCompanyInput = {
    id?: number
    created_by: number
    created_at?: Date | string
    norm_id: number
    observations?: string | null
  }

  export type CompanyAuditorCreateManyCompanyInput = {
    user_id: number
  }

  export type EvaluationFrequencyConfigCreateManyCompanyInput = {
    id?: number
    user_id: number
    norm_id: number
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EvaluationUpdateWithoutCompanyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
    norm?: NormUpdateOneRequiredWithoutEvaluationsNestedInput
    versions?: EvaluationVersionUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: EvaluationVersionUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyAuditorUpdateWithoutCompanyInput = {
    user?: UserUpdateOneRequiredWithoutCompanyAuditorsNestedInput
  }

  export type CompanyAuditorUncheckedUpdateWithoutCompanyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyAuditorUncheckedUpdateManyWithoutCompanyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type EvaluationFrequencyConfigUpdateWithoutCompanyInput = {
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFrequencyConfigsNestedInput
    norm?: NormUpdateOneRequiredWithoutFrequencyConfigsNestedInput
  }

  export type EvaluationFrequencyConfigUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    norm_id?: IntFieldUpdateOperationsInput | number
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationFrequencyConfigUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    norm_id?: IntFieldUpdateOperationsInput | number
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CriterionCreateManyNormInput = {
    id?: number
    description?: string | null
  }

  export type EvaluationCreateManyNormInput = {
    id?: number
    company_id: number
    created_by: number
    created_at?: Date | string
    observations?: string | null
  }

  export type EvaluationFrequencyConfigCreateManyNormInput = {
    id?: number
    user_id: number
    company_id: number
    frequency_days: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CriterionUpdateWithoutNormInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUpdateManyWithoutCriterionNestedInput
  }

  export type CriterionUncheckedUpdateWithoutNormInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUncheckedUpdateManyWithoutCriterionNestedInput
  }

  export type CriterionUncheckedUpdateManyWithoutNormInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationUpdateWithoutNormInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutEvaluationsNestedInput
    creator?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
    versions?: EvaluationVersionUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutNormInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: EvaluationVersionUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateManyWithoutNormInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationFrequencyConfigUpdateWithoutNormInput = {
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFrequencyConfigsNestedInput
    company?: CompanyUpdateOneRequiredWithoutFrequencyConfigsNestedInput
  }

  export type EvaluationFrequencyConfigUncheckedUpdateWithoutNormInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationFrequencyConfigUncheckedUpdateManyWithoutNormInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    frequency_days?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyCriterionInput = {
    id?: number
    text: string
  }

  export type QuestionUpdateWithoutCriterionInput = {
    text?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCriterionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutCriterionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: number
    version_id: number
    response?: string | null
    created_by: number
    created_at?: Date | string
    score?: number | null
  }

  export type AnswerUpdateWithoutQuestionInput = {
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    evaluationVersion?: EvaluationVersionUpdateOneRequiredWithoutAnswersNestedInput
    creator?: UserUpdateOneRequiredWithoutAnswersNestedInput
    evidences?: EvidenceUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EvaluationVersionCreateManyEvaluationInput = {
    id?: number
    created_by: number
    created_at?: Date | string
    is_latest?: boolean
    status?: string | null
    version_number?: number | null
    answered_questions?: number | null
    total_questions?: number | null
    completion_percentage?: number | null
    score?: number | null
  }

  export type EvaluationVersionUpdateWithoutEvaluationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: UserUpdateOneRequiredWithoutVersionsCreatedNestedInput
    answers?: AnswerUpdateManyWithoutEvaluationVersionNestedInput
  }

  export type EvaluationVersionUncheckedUpdateWithoutEvaluationInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: AnswerUncheckedUpdateManyWithoutEvaluationVersionNestedInput
  }

  export type EvaluationVersionUncheckedUpdateManyWithoutEvaluationInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_latest?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version_number?: NullableIntFieldUpdateOperationsInput | number | null
    answered_questions?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    completion_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnswerCreateManyEvaluationVersionInput = {
    id?: number
    question_id: number
    response?: string | null
    created_by: number
    created_at?: Date | string
    score?: number | null
  }

  export type AnswerUpdateWithoutEvaluationVersionInput = {
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    creator?: UserUpdateOneRequiredWithoutAnswersNestedInput
    evidences?: EvidenceUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutEvaluationVersionInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
    evidences?: EvidenceUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutEvaluationVersionInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentCreateManyAnswerInput = {
    id?: number
    text: string
    created_by: number
    created_at?: Date | string
  }

  export type EvidenceCreateManyAnswerInput = {
    id?: number
    url?: EvidenceCreateurlInput | string[]
    created_by: number
    created_at?: Date | string
  }

  export type CommentUpdateWithoutAnswerInput = {
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUpdateWithoutAnswerInput = {
    url?: EvidenceUpdateurlInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutEvidencesNestedInput
  }

  export type EvidenceUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: EvidenceUpdateurlInput | string[]
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateManyWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: EvidenceUpdateurlInput | string[]
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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