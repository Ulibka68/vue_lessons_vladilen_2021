import {
  ActionContext,
  ActionTree,
  GetterTree,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  MutationTree,
  Module
} from "vuex";

import { State as RootState } from "@/store";

// import DomainService, { ResponseDomain as Domain } from "@/services/domain";
// import RedirectionService, {
//   ResponseRedirection as Redirection
// } from "@/services/redirection";

type Domain = { nameDomain: string };
type Redirection = { nameRedirection: string };

class DomainService {
  public dmn: string;
  constructor(pdmn?: string) {
    this.dmn = pdmn ?? "a";
  }
  getDomains(teamId: string): Domain[] {
    return [{ nameDomain: this.dmn }, { nameDomain: teamId }];
  }
}

// Declare state
export type State = {
  domains: Domain[];
  redirections: Redirection[];
};

// Create initial state
const state: State = {
  domains: [],
  redirections: []
};

// Mutations enums
export enum MutationTypes {
  SET_DOMAINS = "SET_DOMAINS",
  SET_REDIRECTIONS = "SET_REDIRECTIONS"
}

// Mutation contracts
export type Mutations<S = State> = {
  [MutationTypes.SET_DOMAINS](state: S, domains: Domain[]): void;
  [MutationTypes.SET_REDIRECTIONS](state: S, redirections: Redirection[]): void;
};

// Define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_DOMAINS](state: State, domains: Domain[]) {
    state.domains = domains;
  },
  [MutationTypes.SET_REDIRECTIONS](state: State, redirections: Redirection[]) {
    state.redirections = redirections;
  }
};

// Action enums
export enum ActionTypes {
  FETCH_DOMAINS = "FETCH_DOMAINS",
  FETCH_REDIRECTIONS = "FETCH_REDIRECTIONS"
}

// Actions context
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

// Actions contracts
export interface Actions {
  [ActionTypes.FETCH_DOMAINS](
    { commit }: AugmentedActionContext,
    teamId: string
  ): void;
  [ActionTypes.FETCH_REDIRECTIONS](
    { commit }: AugmentedActionContext,
    payload: { teamId: string; domainName: string }
  ): void;
}

// Define actions
export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.FETCH_DOMAINS]({ commit }, teamId: string) {
    // As this is just an example, a Service Implementation is out of scope.
    // A service in my case is basically an wrapper for a certain API.
    const domainService = new DomainService();
    const domains = await domainService.getDomains(teamId);
    commit(MutationTypes.SET_DOMAINS, domains);
  },
  async [ActionTypes.FETCH_REDIRECTIONS](
    { commit },
    payload: { teamId: string; domainName: string }
  ) {
    commit(MutationTypes.SET_REDIRECTIONS, [
      { nameRedirection: payload.teamId },
      { nameRedirection: payload.domainName }
    ]);
  }

  /* async [ActionTypes.FETCH_REDIRECTIONS](
    { commit },
    payload: { teamId: string; domainName: string }
  ) {
    const redirectionService = new RedirectionService();

    const { teamId, domainName } = payload;

    let redirections: Redirection[] = [];

    redirections = redirections.concat(
      await redirectionService.getRedirections(teamId, domainName)
    );

    commit(MutationTypes.SET_REDIRECTIONS, redirections);
  }*/
};

// Getters types
export type Getters = {
  getDomains(state: State): Domain[];
  getRedirections(state: State): Redirection[];
};

// Getters
export const getters: GetterTree<State, RootState> & Getters = {
  getDomains: state => {
    return state.domains;
  },
  getRedirections: state => {
    return state.redirections;
  }
};

// Setup store type
export type Store<S = State> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export const DomainModule: Module<State, RootState> = {
  state,
  mutations,
  actions,
  getters
};
