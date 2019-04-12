/**
 * Defines the expected format for navigation menu items
 */
export interface NavItem {
    /**
     * * `path` Route path to link
     */
    path: string;
    /**
     * * `name` Display name to be used in navigation menu
     */
    name: string;
    /**
     * * `icon` <mat-icon> compatible icon to display in mobile/responsive view
     */
    icon: string;
}

/**
 * Defines the expected format for all Routes' `data`
 */
export interface RouteData {
    /**
     * * `title` Route/page title
     */
    title: string;
    /**
     * * `name` Display Name to be used in nav menu items
     */
    name: string;
    /**
     * * `icon` <mat-icon> compatible icon to display in nav menu items
     */
    icon: string;
}
