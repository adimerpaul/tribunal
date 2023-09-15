import { OSelect } from '@/common/components'
import { Notify, QImg, QInput, QSelect, QTable, Quasar } from 'quasar'
import OEncontrarPersona from '@/modules/identidad/personas/components/OEncontrarPersona.vue'

setDefault(QInput, 'outlined', true)
setDefault(QInput, 'dense', true)

setDefault(OEncontrarPersona, 'outlined', true)
setDefault(OEncontrarPersona, 'dense', true)

setDefault(QSelect, 'outlined', true)
setDefault(QSelect, 'dense', true)
setDefault(QSelect, 'optionsDense', true)

setDefault(OSelect, 'outlined', true)
setDefault(OSelect, 'dense', true)
setDefault(OSelect, 'optionsDense', true)

setDefault(QTable, 'dense', true)
setDefault(QTable, 'rowsPerPageOptions', [10, 50, 100])
setDefault(QTable, 'bordered', true)
setDefault(QTable, 'flat', true)
setDefault(
  QImg,
  'src',
  "data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid meet'%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath fill='%23c2c2c2' stroke='null' id='svg_1' d='m20.97478,21.22332l-17.99921,0l0,-18.42767l17.99921,0m0,-2.63252l-17.99921,0a2.57132,2.63252 0 0 0 -2.57132,2.63252l0,18.42767a2.57132,2.63252 0 0 0 2.57132,2.63252l17.99921,0a2.57132,2.63252 0 0 0 2.57132,-2.63252l0,-18.42767a2.57132,2.63252 0 0 0 -2.57132,-2.63252m-3.21415,17.44048c0,-1.97439 -3.85697,-2.96159 -5.78546,-2.96159s-5.78546,0.9872 -5.78546,2.96159l0,0.9872l11.57092,0m-5.78546,-6.25225a2.89273,2.96159 0 0 0 2.89273,-2.96159a2.89273,2.96159 0 0 0 -2.89273,-2.96159a2.89273,2.96159 0 0 0 -2.89273,2.96159a2.89273,2.96159 0 0 0 2.89273,2.96159z'/%3E%3C/g%3E%3C/svg%3E"
)

Notify.setDefaults({
  position: 'bottom',
  timeout: 2500,
  textColor: 'white',
  html: true,
  badgeStyle: 'opacity: 0',
  actions: [{ icon: 'mdi-close', color: 'white' }]
})

export default Quasar

/**
 * @params {Component} component - componente de quasar
 * @params {string} key - propiedad del componente
 * @params {any} value - valor para la propiedad
 */
function setDefault(component: any, key: string, value: any) {
  const prop = component.props[key]
  switch (typeof prop) {
    case 'object':
      prop.default = value
      break
    case 'function':
      component.props[key] = {
        type: prop,
        default: value
      }
      break
    case 'undefined':
      throw new Error('unknown prop: ' + key)
    default:
      throw new Error('unhandled type: ' + typeof prop)
  }
}
