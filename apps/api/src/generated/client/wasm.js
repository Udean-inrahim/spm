
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  emailVerified: 'emailVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SensorScalarFieldEnum = {
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

exports.Prisma.ReadingScalarFieldEnum = {
  id: 'id',
  sensorId: 'sensorId',
  soilMoisture: 'soilMoisture',
  temperature: 'temperature',
  recordedAt: 'recordedAt'
};

exports.Prisma.AlertScalarFieldEnum = {
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

exports.Prisma.SettingScalarFieldEnum = {
  id: 'id',
  minSoilMoisture: 'minSoilMoisture',
  maxSoilMoisture: 'maxSoilMoisture',
  minTemperature: 'minTemperature',
  maxTemperature: 'maxTemperature',
  refreshIntervalSec: 'refreshIntervalSec',
  offlineTimeoutSec: 'offlineTimeoutSec',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Sensor: 'Sensor',
  Reading: 'Reading',
  Alert: 'Alert',
  Setting: 'Setting'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Administrator\\Documents\\dirly\\apps\\api\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\Administrator\\Documents\\dirly\\apps\\api\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\"]\n  output          = \"../src/generated/client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id            String   @id @default(cuid())\n  name          String\n  email         String   @unique\n  password      String\n  role          String   @default(\"USER\")\n  emailVerified Boolean  @default(false)\n  createdAt     DateTime @default(now())\n  updatedAt     DateTime @updatedAt\n}\n\nmodel Sensor {\n  id         String    @id @default(cuid())\n  sensorCode String    @unique\n  name       String\n  location   String\n  plant      String?\n  isActive   Boolean   @default(true)\n  lastSeenAt DateTime?\n  createdAt  DateTime  @default(now())\n  updatedAt  DateTime  @updatedAt\n  readings   Reading[]\n  alerts     Alert[]\n\n  @@index([isActive])\n}\n\nmodel Reading {\n  id           String   @id @default(cuid())\n  sensorId     String\n  sensor       Sensor   @relation(fields: [sensorId], references: [id], onDelete: Cascade)\n  soilMoisture Float\n  temperature  Float\n  recordedAt   DateTime @default(now())\n\n  @@index([sensorId, recordedAt])\n}\n\nmodel Alert {\n  id         String    @id @default(cuid())\n  sensorId   String\n  sensor     Sensor    @relation(fields: [sensorId], references: [id], onDelete: Cascade)\n  type       String\n  value      Float?\n  threshold  Float?\n  message    String\n  severity   String\n  status     String    @default(\"ACTIVE\")\n  createdAt  DateTime  @default(now())\n  resolvedAt DateTime?\n\n  @@index([status, createdAt])\n  @@index([sensorId, type, status])\n}\n\nmodel Setting {\n  id                 String   @id @default(\"singleton\")\n  minSoilMoisture    Float    @default(30)\n  maxSoilMoisture    Float    @default(70)\n  minTemperature     Float    @default(15)\n  maxTemperature     Float    @default(35)\n  refreshIntervalSec Int      @default(5)\n  offlineTimeoutSec  Int      @default(60)\n  updatedAt          DateTime @updatedAt\n}\n",
  "inlineSchemaHash": "4e659d704554cd0c535186a65d36cfd1a890d117827e1ee8945f68007f8c36e2",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Sensor\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sensorCode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"plant\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"lastSeenAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"readings\",\"kind\":\"object\",\"type\":\"Reading\",\"relationName\":\"ReadingToSensor\"},{\"name\":\"alerts\",\"kind\":\"object\",\"type\":\"Alert\",\"relationName\":\"AlertToSensor\"}],\"dbName\":null},\"Reading\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sensorId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sensor\",\"kind\":\"object\",\"type\":\"Sensor\",\"relationName\":\"ReadingToSensor\"},{\"name\":\"soilMoisture\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"temperature\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"recordedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Alert\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sensorId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sensor\",\"kind\":\"object\",\"type\":\"Sensor\",\"relationName\":\"AlertToSensor\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"value\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"threshold\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"severity\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"resolvedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Setting\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"minSoilMoisture\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"maxSoilMoisture\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"minTemperature\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"maxTemperature\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"refreshIntervalSec\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"offlineTimeoutSec\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

