import {merge, uniq, defaultsDeep} from "lodash";

export const SORT_DIRECTIONS = {
    UP: 'up',
    DOWN: 'down',
    NONE: 'none'
}

export const compose = (...builders) => (...props) =>
    builders.reduce((arg, builder) => defaultsDeep(builder(arg), arg), merge(...props));

export const compare = (field) => (a, b) => {
    if (a[field] < b[field]) {
        return -1;
    }
    if (a[field] > b[field]) {
        return 1;
    }
    return 0;
}

export const getDirection = (direction) => {
    switch (direction) {
        case SORT_DIRECTIONS.NONE:
            return SORT_DIRECTIONS.DOWN;
        case SORT_DIRECTIONS.DOWN:
            return SORT_DIRECTIONS.UP;
        default:
            return SORT_DIRECTIONS.NONE
    }
}

export const getUniq = uniq;