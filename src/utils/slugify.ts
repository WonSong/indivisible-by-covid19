export function slugify(str: string): string {
    return str.replace(/ /g, '-').toLowerCase();
}
