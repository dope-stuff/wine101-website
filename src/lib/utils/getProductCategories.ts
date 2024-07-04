export const getProductCategories = (data: any): string[] => {
  const categories: string[] = []

  if (data.category) {
    categories.push(data.category)
  }

  if (data.country) {
    categories.push(data.country)
  }

  if (data.type?.value) {
    categories.push(data.type.value)
  }

  if (data.tags?.value) {
    categories.push(data.tags.value)
  }
  console.log('sss', !!data.categories && data.categories[0]?.name.split(',').length > 0)
  console.log('aaa', !!data.variants && data.variants[0]?.material.split(',').length > 0)

  if (!!data.categories && data.categories[0]?.name.split(',').length > 0) {
    data.categories[0].name.split(',').map((e: string) => categories.push(e))
  }

  if (!!data.variants && data.variants[0]?.material.split(',').length > 0) {
    data.variants[0].material.split(',').map((e: string) => categories.push(e))
  }

  return categories
}
