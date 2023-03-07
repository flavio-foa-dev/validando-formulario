export function legalAge(age) {
  const dateNasc = new Date(age)

  const dateAtual = new Date()
  const dateNascMaisDezoit0 = new Date(dateNasc.getUTCFullYear() + 18, dateNasc.getUTCMonth(), dateNasc.getUTCDate())
  const result = dateAtual >= dateNascMaisDezoit0

  console.log(result, ">>>>>>>")




}


