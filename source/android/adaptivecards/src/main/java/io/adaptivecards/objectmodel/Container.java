/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (http://www.swig.org).
 * Version 3.0.12
 *
 * Do not make changes to this file unless you know what you are doing--modify
 * the SWIG interface file instead.
 * ----------------------------------------------------------------------------- */

package io.adaptivecards.objectmodel;

public class Container extends BaseCardElement {
  private transient long swigCPtr;
  private transient boolean swigCMemOwnDerived;

  protected Container(long cPtr, boolean cMemoryOwn) {
    super(AdaptiveCardObjectModelJNI.Container_SWIGSmartPtrUpcast(cPtr), true);
    swigCMemOwnDerived = cMemoryOwn;
    swigCPtr = cPtr;
  }

  protected static long getCPtr(Container obj) {
    return (obj == null) ? 0 : obj.swigCPtr;
  }

  protected void finalize() {
    delete();
  }

  public synchronized void delete() {
    if (swigCPtr != 0) {
      if (swigCMemOwnDerived) {
        swigCMemOwnDerived = false;
        AdaptiveCardObjectModelJNI.delete_Container(swigCPtr);
      }
      swigCPtr = 0;
    }
    super.delete();
  }

  public Container() {
    this(AdaptiveCardObjectModelJNI.new_Container(), true);
  }

  public JsonValue SerializeToJsonValue() {
    return new JsonValue(AdaptiveCardObjectModelJNI.Container_SerializeToJsonValue(swigCPtr, this), true);
  }

  public BaseCardElementVector GetItems() {
    return new BaseCardElementVector(AdaptiveCardObjectModelJNI.Container_GetItems__SWIG_0(swigCPtr, this), false);
  }

  public ContainerStyle GetStyle() {
    return ContainerStyle.swigToEnum(AdaptiveCardObjectModelJNI.Container_GetStyle(swigCPtr, this));
  }

  public void SetStyle(ContainerStyle value) {
    AdaptiveCardObjectModelJNI.Container_SetStyle(swigCPtr, this, value.swigValue());
  }

  public BaseActionElement GetSelectAction() {
    long cPtr = AdaptiveCardObjectModelJNI.Container_GetSelectAction(swigCPtr, this);
    return (cPtr == 0) ? null : new BaseActionElement(cPtr, true);
  }

  public void SetSelectAction(BaseActionElement action) {
    AdaptiveCardObjectModelJNI.Container_SetSelectAction(swigCPtr, this, BaseActionElement.getCPtr(action), action);
  }

  public void SetLanguage(String value) {
    AdaptiveCardObjectModelJNI.Container_SetLanguage(swigCPtr, this, value);
  }

  public VerticalContentAlignment GetVerticalContentAlignment() {
    return VerticalContentAlignment.swigToEnum(AdaptiveCardObjectModelJNI.Container_GetVerticalContentAlignment(swigCPtr, this));
  }

  public void SetVerticalContentAlignment(VerticalContentAlignment value) {
    AdaptiveCardObjectModelJNI.Container_SetVerticalContentAlignment(swigCPtr, this, value.swigValue());
  }

  public SWIGTYPE_p_std__shared_ptrT_BackgroundImage_t GetBackgroundImage() {
    return new SWIGTYPE_p_std__shared_ptrT_BackgroundImage_t(AdaptiveCardObjectModelJNI.Container_GetBackgroundImage(swigCPtr, this), true);
  }

  public void SetBackgroundImage(SWIGTYPE_p_std__shared_ptrT_BackgroundImage_t value) {
    AdaptiveCardObjectModelJNI.Container_SetBackgroundImage(swigCPtr, this, SWIGTYPE_p_std__shared_ptrT_BackgroundImage_t.getCPtr(value));
  }

  public void GetResourceInformation(RemoteResourceInformationVector resourceInfo) {
    AdaptiveCardObjectModelJNI.Container_GetResourceInformation(swigCPtr, this, RemoteResourceInformationVector.getCPtr(resourceInfo), resourceInfo);
  }

  public static Container dynamic_cast(BaseCardElement baseCardElement) {
    long cPtr = AdaptiveCardObjectModelJNI.Container_dynamic_cast(BaseCardElement.getCPtr(baseCardElement), baseCardElement);
    return (cPtr == 0) ? null : new Container(cPtr, true);
  }

}
