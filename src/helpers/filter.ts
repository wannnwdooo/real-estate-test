export const filterItems = <T extends Record<string, unknown>>(
  data: T[],
  searchQuery: string,
  keysToSearch: (keyof T)[]
) =>
  data.filter((el) => {
    return keysToSearch.some((key) => {
      return String(el[key]).toLowerCase().includes(searchQuery.toLowerCase())
    })
  })
