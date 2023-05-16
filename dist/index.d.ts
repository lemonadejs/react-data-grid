/**
 * Official Type definitions for LemonadeJS Data Grid
 * https://lemonadejs.net/
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 */

interface Datagrid {
    (): any
    [key: string]: any
}

declare function Datagrid<Datagrid>(props: Datagrid): any;

export { Datagrid };