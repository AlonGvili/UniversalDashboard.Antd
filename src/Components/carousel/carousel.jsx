import React, { Fragment } from "react";
import { Carousel } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";
import ReactInterval from "react-interval";

const AntdCarousel = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const carouselProps = {
    prevArrow: UniversalDashboard.renderComponent(attributes.prevArrow),
    nextArrow: UniversalDashboard.renderComponent(attributes.nextArrow)
  };

  return (
    <Fragment>
      <Carousel {...attributes} {...carouselProps}>
        {UniversalDashboard.renderComponent(content)}
      </Carousel>
      <ReactInterval
        callback={reload}
        timeout={attributes.refreshInterval}
        enabled={attributes.autoRefresh}
      />
    </Fragment>
  );
};

export default AntdCarousel;
