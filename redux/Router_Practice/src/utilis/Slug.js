export function slug(title){
    return  title
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-!$&'()*+,;=@]/g, '') // Include additional characters
    .replace(/\s+/g, '-')  // Replace spaces with hyphens
    .replace(/--+/g, '-')  // Replace consecutive hyphens with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens 
}