export const DescriptionTrimmer = (str: String) => {
    
    return str.length > 150 ? `${str.slice(0, 150)}...` : str
}