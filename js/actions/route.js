/**
 * Created by grahamallen on 12/25/16.
 */
'use strict';

import type { Action } from './types'

export const PUSH_NEW_ROUTE = "PUSH_NEW_ROUTE";
export const REPLACE_ROUTE = "REPLACE_ROUTE";
export const REPLACE_OR_PUSH_ROUTE = "REPLACE_OR_PUSH_ROUTE";
export const POP_ROUTE = "POP_ROUTE";
export const RESET_ROUTE = "RESET_ROUTE";
export const POP_TO_ROUTE = "POP_TO_ROUTE";

export function replaceRoute(route:string, passProps:any):Action {
    return {
        type: REPLACE_ROUTE,
        route: route,
        passProps: passProps
    }
}

export function pushNewRoute(route:string, passProps:any):Action {
    return {
        type: PUSH_NEW_ROUTE,
        route: route,
        passProps: passProps
    }
}

export function replaceOrPushRoute(route:string, passProps:any):Action {
    return {
        type: REPLACE_OR_PUSH_ROUTE,
        route: route,
        passProps: passProps
    }
}

export function popRoute(passProps:any):Action {
    return {
        type: POP_ROUTE,
        passProps: passProps
    }
}

export function popToRoute(route:string, passProps:any):Action {
    return {
        type: POP_TO_ROUTE,
        route: route,
        passProps: passProps
    }
}

export function resetRoute(route: string):Action {
    return {
        type: RESET_ROUTE
    }
}