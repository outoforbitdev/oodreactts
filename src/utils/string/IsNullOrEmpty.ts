export default function IsNullOrEmpty(val: string | undefined): boolean {
    return val === "" || val === null || val === undefined;
}