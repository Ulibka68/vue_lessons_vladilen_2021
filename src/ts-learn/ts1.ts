import "./zip";

export const main = () => {
  console.log("=== ARRAY ZIP ===");
  const asb = [1, 2, 3]
    // .map(n => n * 2) // number[]
    .zip(["a", "b", "text3"]);
  console.log(asb);

  type Account = {
    id: number;
    isEmployee: boolean;
    notes: string[];
  };
  // Сделать все поля опциональными
  type OptionalAccount = {
    [K in keyof Account]?: Account[K];
  };
  //
  type Get = { <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1] };

  function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
    return o[k];
  }
  //
  type ActivityLog = {
    lastEvent: number;
    events: {
      id: string;
      timestamp: number;
      type: "Read" | "Write";
    }[];
  };
  const activityLog: ActivityLog = {
    lastEvent: 118232,
    events: [
      {
        timestamp: 2,
        type: "Read",
        id: "am"
      },
      { id: "aa", timestamp: 33, type: "Write" }
    ]
  };
  const lastEvent = get(activityLog, "lastEvent"); // Дата (Date)
  console.log(lastEvent);

  //
  type ElementType2<T> = T extends (infer U)[] ? U : T;
  type B = ElementType2<number[]>; // number
  //********
  type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never;
  // Получаем тип Array.slice arr.slice([begin[, end]])
  type F = typeof Array["prototype"]["slice"];
  type A = SecondArg<F>; // number | undefined
  // type E = { a: string; b?: number };
  type E = (a: string, b: number) => void;
  type AE = SecondArg<E>;
  const ab: AE = 1;
  //
  //
  //*************************************************
  //***************** Отправители событий 229
  //*************************************************
  interface Emitter {
    // Отправка события
    emit(channel: string, value: unknown): void;
    // Сделать что-либо после отправки события
    on(channel: string, f: (value: unknown) => void): void;
  }
  //
  // Прослушивание новых событий, отправленных клиентом
  // client.on('ready', () => console.info('Client is ready'))
  // client.on('error', e => console.error('An error occurred!', e))
  // client.on('reconnecting', params => console.info('Reconnecting...',    params))
  //
  //  перегруженного типа:
  type RedisClient = {
    on(event: "ready", f: () => void): void;
    // on(event: "error", f: (e: Error) => void): void;
    // on(
    //   event: "reconnecting",
    //   f: (params: { attempt: number; delay: number }) => void
    // ): void;
  };
  const f26func = () => {
    console.log("aa");
  };

  //сверху описана перегурзка функции - но имплементация у нее всегда одна

  const a26: RedisClient = {
    on(event: "ready", f26: () => void) {
      console.log("a");
    }
  };
  const a261: RedisClient = {
    on(event: "ready", f26func) {
      console.log(event);
      f26func();
    }
  };

  // Выразим этот код с помощью   отображенного типа (см. подраздел «Отображенные типы» на с. 173),
  type Events = {
    ready: void;
    error: Error;
    reconnecting: { attempt: number; delay: number };
  };
  type RedisClient2 = {
    on<E extends keyof Events>(event: E, f: (arg: Events[E]) => void): void;
  };

  // Затем мы можем использовать этот тип, чтобы сделать безопаснее библио-
  // теку Node-Redis, типизировав оба его метода — emit и on — максимально
  // безопасным образом:
  type RedisClient3 = {
    on<E extends keyof Events>(event: E, f: (arg: Events[E]) => void): void;
    emit<E extends keyof Events>(event: E, arg: Events[E]): void;
  };
  // const a25 : RedisClient2 = {on:{'ready',()=>void)}}
  //
  //********************************
  //********************************
  type User = string;
  type Request =
    | { entity: "user"; data: User }
    | { entity: "location"; data: Location };

  // client.ts
  async function getAsync<R extends Request>(
    entity: R["entity"]
  ): Promise<R["data"]> {
    const res = await fetch("/api/");
    const json = await res.json();
    if (!json) {
      throw ReferenceError("Empty response");
    }
    return json;
  }
  // app.ts
  async function startApp() {
    const user = await getAsync("user"); // User
  }
};
