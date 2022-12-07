// Type Aliases e Union
type Uid = number | string | undefined

type Platform = 'Windows' | 'Linux' | 'Mac OS' | 'ios'

function renderPlatform(platform: Platform) {
  return platform
}

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}.`)
}

renderPlatform('ios')

logDetails(123, 'sapato')
logDetails('123', 'sapato')

logInfo('123', 'teste')
logInfo(123, 'teste')