import { date } from 'quasar'

const required = (val: unknown) => {
  if (Array.isArray(val)) {
    return val.length > 0 || 'Requerido'
  } else if (typeof val === 'number') {
    return !!val.toString() || 'Requerido'
  } else {
    return !!val || 'Requerido'
  }
}
const max = (val: unknown, max: number): boolean | string => {
  if (!val) return true

  return typeof val === 'string'
    ? val.length <= max || 'Máximo ' + max + ' caracteres'
    : (val as number) <= max || 'Máximo ' + max
}

const min = (val: unknown, min: number) => {
  if (Array.isArray(val)) {
    return val.length >= min || 'Mínimo ' + min + ` elemento${min !== 1 ? 's' : ''}`
  }

  return typeof val === 'string'
    ? val.length >= min || 'Mínimo ' + min + ` caracteres${min !== 1 ? 's' : ''}`
    : (val as number) >= min || 'Mínimo ' + min
}

const rangoFecha = (
  val: string,
  min: string = new Date().toISOString(),
  max: string = new Date().toISOString()
) => {
  if (!(typeof val === 'string' && date.isValid(val) && date.isValid(min) && date.isValid(max))) {
    return 'Formado de fechas incorrecta'
  }
  const fechaEntradaTexto = val.split('T')[0]
  const fechaDeTexto = min.split('T')[0]
  const fechaATexto = max.split('T')[0]

  const fechaEntrada = new Date(
    +fechaEntradaTexto.split('-')[0],
    +fechaEntradaTexto.split('-')[1] - 1,
    +fechaEntradaTexto.split('-')[2]
  )
  const fechaDe = new Date(
    +fechaDeTexto.split('-')[0],
    +fechaDeTexto.split('-')[1] - 1,
    +fechaDeTexto.split('-')[2]
  )
  const fechaA = new Date(
    +fechaATexto.split('-')[0],
    +fechaATexto.split('-')[1] - 1,
    +fechaATexto.split('-')[2]
  )

  const estaEntreFechas = date.isBetweenDates(fechaEntrada, fechaDe, fechaA, {
    inclusiveFrom: true,
    inclusiveTo: true,
    onlyDate: true
  })

  return (
    estaEntreFechas ||
    `Debe estar entre ${fechaDe.toLocaleDateString('en-GB')} y ${fechaA.toLocaleDateString(
      'en-GB'
    )}`
  )
}

const minFecha = (val: string, min: string = new Date().toISOString()) => {
  if (!(typeof val === 'string' && date.isValid(val) && date.isValid(min))) {
    return 'Formado de fechas incorrecta'
  }
  const fechaEntradaTexto = val.split('T')[0]
  const fechaDeTexto = min.split('T')[0]

  const fechaEntrada = new Date(
    +fechaEntradaTexto.split('-')[0],
    +fechaEntradaTexto.split('-')[1] - 1,
    +fechaEntradaTexto.split('-')[2]
  )
  const fechaMin = new Date(
    +fechaDeTexto.split('-')[0],
    +fechaDeTexto.split('-')[1] - 1,
    +fechaDeTexto.split('-')[2]
  )

  return (
    fechaEntrada.getTime() >= fechaMin.getTime() ||
    `Debe ser mayor o igual a ${fechaMin.toLocaleDateString('en-GB')}`
  )
}

const maxFecha = (val: string, max: string = new Date().toISOString()) => {
  if (!(typeof val === 'string' && date.isValid(val) && date.isValid(max))) {
    return 'Formato de fechas incorrecta'
  }
  const fechaEntradaTexto = val.split('T')[0]
  const fechaDeTexto = max.split('T')[0]

  const fechaEntrada = new Date(
    +fechaEntradaTexto.split('-')[0],
    +fechaEntradaTexto.split('-')[1] - 1,
    +fechaEntradaTexto.split('-')[2]
  )
  const fechaMax = new Date(
    +fechaDeTexto.split('-')[0],
    +fechaDeTexto.split('-')[1] - 1,
    +fechaDeTexto.split('-')[2]
  )

  return (
    fechaEntrada.getTime() <= fechaMax.getTime() ||
    `Debe ser menor o igual a ${fechaMax.toLocaleDateString('en-GB')}`
  )
}

const rangoHora = (
  val: string,
  maxDate: string = new Date().toISOString(),
  min: string = new Date().toISOString(),
  max: string = new Date().toISOString()
) => {
  const fechaActual = new Date()

  if (
    fechaActual.toISOString().split('T')[0] == new Date(maxDate).toISOString().split('T')[0] &&
    fechaActual.getHours() < 19
  ) {
    max = fechaActual.toLocaleTimeString('en-GB').substring(0, 5)
  }

  const fechaEntradaTexto = new Date(
    fechaActual.getFullYear(),
    fechaActual.getDate(),
    fechaActual.getDay(),
    +val.split(':')[0],
    +val.split(':')[1]
  ).toISOString()

  const fechaEntradaMin = new Date(
    fechaActual.getFullYear(),
    fechaActual.getDate(),
    fechaActual.getDay(),
    +min.split(':')[0],
    +min.split(':')[1]
  ).toISOString()

  const fechaEntradaMax = new Date(
    fechaActual.getFullYear(),
    fechaActual.getDate(),
    fechaActual.getDay(),
    +max.split(':')[0],
    +max.split(':')[1]
  ).toISOString()

  if (
    !(
      typeof val === 'string' &&
      date.isValid(fechaEntradaTexto) &&
      date.isValid(fechaEntradaMin) &&
      date.isValid(fechaEntradaMax)
    )
  ) {
    return 'Formado de horas incorrecta'
  }
  const dateEntrada = new Date(fechaEntradaTexto).getTime()
  const dateMin = new Date(fechaEntradaMin).getTime()
  const dateMax = new Date(fechaEntradaMax).getTime()
  return (
    (dateEntrada >= dateMin && dateEntrada <= dateMax) || `Debe estar en horario de ${min} a ${max}`
  )
}

const rangoHoraMayorActual = (
  val: string,
  maxDate: string = new Date().toISOString(),
  min: string = new Date().toISOString(),
  max: string = new Date().toISOString()
) => {
  const fechaActual = new Date()

  if (
    fechaActual.toISOString().split('T')[0] == new Date(maxDate).toISOString().split('T')[0] &&
    fechaActual.getHours() < 19
  ) {
    min = fechaActual.toLocaleTimeString('en-GB').substring(0, 5)
  }

  const fechaEntradaTexto = new Date(
    fechaActual.getFullYear(),
    fechaActual.getDate(),
    fechaActual.getDay(),
    +val.split(':')[0],
    +val.split(':')[1]
  ).toISOString()

  const fechaEntradaMin = new Date(
    fechaActual.getFullYear(),
    fechaActual.getDate(),
    fechaActual.getDay(),
    +min.split(':')[0],
    +min.split(':')[1]
  ).toISOString()

  const fechaEntradaMax = new Date(
    fechaActual.getFullYear(),
    fechaActual.getDate(),
    fechaActual.getDay(),
    +max.split(':')[0],
    +max.split(':')[1]
  ).toISOString()

  if (
    !(
      typeof val === 'string' &&
      date.isValid(fechaEntradaTexto) &&
      date.isValid(fechaEntradaMin) &&
      date.isValid(fechaEntradaMax)
    )
  ) {
    return 'Formado de horas incorrecta'
  }
  const dateEntrada = new Date(fechaEntradaTexto).getTime()
  const dateMin = new Date(fechaEntradaMin).getTime()
  const dateMax = new Date(fechaEntradaMax).getTime()
  return (
    (dateEntrada >= dateMin && dateEntrada <= dateMax) || `Debe estar en horario de ${min} a ${max}`
  )
}

const maxDigit = (val: unknown, max: number): boolean | string => {
  if (!val) return true

  if (typeof val !== 'number') throw new Error('el valor no es numero')

  return val.toString().length <= max || 'Máximo ' + max + ` dígito${max !== 1 ? 's' : ''}`
}

export {
  required,
  max,
  min,
  maxDigit,
  rangoFecha,
  minFecha,
  maxFecha,
  rangoHora,
  rangoHoraMayorActual
}
