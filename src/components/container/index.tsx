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
