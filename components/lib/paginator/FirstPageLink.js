import React from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils, classNames } from '../utils/Utils';
import { Ripple } from '../ripple/Ripple';

export const FirstPageLink = (props) =>  {
    const className = classNames('p-paginator-first p-paginator-element p-link', { 'p-disabled': props.disabled });
    const iconClassName = 'p-paginator-icon pi pi-angle-double-left';
    const element = (
        <button type="button" className={className} onClick={props.onClick} disabled={props.disabled}>
            <span className={iconClassName}></span>
            <Ripple />
        </button>
    );

    if (props.template) {
        const defaultOptions = {
            onClick: props.onClick,
            className,
            iconClassName,
            disabled: props.disabled,
            element,
            props: props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
}

FirstPageLink.defaultProps = {
    disabled: false,
    onClick: null,
    template: null
}

FirstPageLink.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    template: PropTypes.any
}
