import {defaultsDeep as overrideProps} from "lodash";

export const SORT_DIRECTIONS = {
    UP: 'up',
    DOWN: 'down',
    NONE: 'none'
}

export const compose = (...hooks) => (props) => hooks.reduce((arg, hook) => overrideProps(hook(arg), arg), props);

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