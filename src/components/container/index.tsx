import "./index.css";

type ContainerCenterProps = {
  children: React.ReactElement;
  styles?: React.CSSProperties;
};

export const ContainerCenter = (props: ContainerCenterProps) => {
  return (
    <div className="iContainerCenter" style={props.styles ? props.styles : {}}>
      {props.children}
    </div>
  );
};

ContainerCenter.XS = (props: ContainerCenterProps) => {
  return (
    <div
      className="iContainerCenter-XS"
      style={props.styles ? props.styles : {}}
    >
      {props.children}
    </div>
  );
};

ContainerCenter.SM = (props: ContainerCenterProps) => {
  return (
    <div
      className="iContainerCenter-SM"
      style={props.styles ? props.styles : {}}
    >
      {props.children}
    </div>
  );
};

ContainerCenter.MD = (props: ContainerCenterProps) => {
  return (
    <div
      className="iContainerCenter-MD"
      style={props.styles ? props.styles : {}}
    >
      {props.children}
    </div>
  );
};

ContainerCenter.LG = (props: ContainerCenterProps) => {
  return (
    <div
      className="iContainerCenter-LG"
      style={props.styles ? props.styles : {}}
    >
      {props.children}
    </div>
  );
};

ContainerCenter.XL = (props: ContainerCenterProps) => {
  return (
    <div
      className="iContainerCenter-XL"
      style={props.styles ? props.styles : {}}
    >
      {props.children}
    </div>
  );
};

ContainerCenter.XXL = (props: ContainerCenterProps) => {
  return (
    <div
      className="iContainerCenter-XXL"
      style={props.styles ? props.styles : {}}
    >
      {props.children}
    </div>
  );
};

ContainerCenter["iPhone4"] = ContainerCenter["iPhone4S"] = (
  props: ContainerCenterProps
) => {
  return (
    <div
      className="iContainerCenter-iPhone-4-4S"
      style={props.styles ? props.styles : {}}
    >
      {props.children}
    </div>
  );
};

ContainerCenter["iPhone5"] =
ContainerCenter["iPhone5S"] = 
ContainerCenter["iPhone5C"] = (props: ContainerCenterProps) => {
  return (
    <div
      className="iContainerCenter-iPhone-5-5S-5C"
      style={props.styles ? props.styles : {}}
    >
      {props.children}
    </div>
  );
};

ContainerCenter["iPhoneSE"] = (props: ContainerCenterProps) => {
  return (
    <div
      className="iContainerCenter-iPhone-SE"
      style={props.styles ? props.styles : {}}
    >
      {props.children}
    </div>
  );
};

ContainerCenter["iPhone6"] = (props: ContainerCenterProps) => {
  return (
    <div
      className="iContainerCenter-iPhone-6"
      style={props.styles ? props.styles : {}}
    >
      {props.children}
    </div>
  );
};
