let isPalindrome = function(s: string): boolean {
    let transformed = s.toLowerCase().replace(/[^a-z0-9]/g,'')
    return transformed.split("").reverse().join("") == transformed
}

export {isPalindrome}