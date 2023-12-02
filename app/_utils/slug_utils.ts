// This turns [guides. minors, stat] into
// ['/guides/', '/guides/minors/', '/guides/minors/stat/']
function breakdownSlugIntoUrls(slug: any) {
    const parts = slug.split("/").filter((x: any) => x)
  
    // This turns [guides. minors, stat] into
    // ['/guides/', '/guides/minors/', '/guides/minors/stat']
    const urls = parts.reduce((acc: any, current: any, i: any) => {
      acc[i] = (acc.slice(-1)[0] || "/") + current + "/"
      return acc
    }, [])
  
    return urls
  }
  
  export default breakdownSlugIntoUrls
