type ActionsParams = () => Promise<boolean>
export class DialogHandler {
  isOpen = false
  title = ''
  enableActions = true
  isLoading = false
  isMaximizad = false
  isPersistent = false
  private actionsExecute?: ActionsParams

  // FIXME: Verificar si es necesario
  estaEnAnchoCompleto = false
  estaEnAltoCompleto = false
  estaEnAnchoMedio = false
  estaEnAnchoPequenio = false
  estaHabilitadoMaximizar = false
  /* static new<T extends DialogVista>(this: new (objectoPlano: any) => T, objectoPlano?: any): T {
      return new this(objectoPlano)
    } */
  constructor(params?: Partial<DialogHandler & { actionsParam?: ActionsParams }>) {
    if (params) {
      Object.assign(this, params)
      this.actionsExecute = params.actionsParam
    }
  }

  open() {
    this.isOpen = true
  }
  close() {
    this.isOpen = false
  }

  toggle() {
    this.isOpen = !this.isOpen
  }
  reset() {
    this.isOpen = false
    this.title = ''
    this.isLoading = false
    this.enableActions = true
  }

  set actionsParam(actionsParams: ActionsParams | undefined) {
    this.actionsExecute = actionsParams
  }

  async actions(isOk: boolean): Promise<void> {
    if (!isOk) {
      this.close()
      return
    }

    if (!this.actionsExecute) return
    this.isLoading = true
    const esExitoso = await this.actionsExecute()
    this.isLoading = false
    esExitoso && this.close()
  }
}
