// no toma en cuenta el sonnar import type { Request } from 'express';
// no toma en cuenta el sonnar import type { IncomingMessage } from 'http';
// no toma en cuenta el sonnar import { nanoid } from 'nanoid';
// no toma en cuenta el sonnar import type { Params } from 'nestjs-pino';
// no toma en cuenta el sonnar import { multistream } from 'pino';
// no toma en cuenta el sonnar import type { ReqId } from 'pino-http';

// esta linea la pongo para que tome en cuenta el sonnar [const passUrl = new Set(['/health', '/graphql'])];

// export const loggerOptions: Params = {
//   pinoHttp: [
//     {
//       // https://getpino.io/#/docs/api?id=timestamp-boolean-function
//       // Change time value in production log.
//       // timestamp: stdTimeFunctions.isoTime,
//       quietReqLogger: true,
//       genReqId: (req: IncomingMessage): ReqId =>
//         (<Request>req).header('X-Request-Id') || nanoid(),
//       ...(process.env.NODE_ENV === 'production'
//         ? {}
//         : {
//             level: 'debug',
//             // https://github.com/pinojs/pino-pretty
//             transport: {
//               target: 'pino-pretty',
//               options: {
//                 singleLine: true,
//                 translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
//               },
//             },
//           }),
//       autoLogging: {
//         ignore: (req: IncomingMessage) =>
//           passUrl.has((<Request>req).originalUrl),
//       },
//     },
//     multistream(
//       [
//         // https://getpino.io/#/docs/help?id=log-to-different-streams
//         { stream: process.stdout },
//         { stream: process.stderr, level: 'error' },
//       ],
//       { dedupe: true },
//     ),
//   ],
// };
