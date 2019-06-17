declare module '*.md' {
  const value: {
    content: string
    data: {
      [key: string]: string
    }
    isEmpty: boolean
  }

  export = value
}
