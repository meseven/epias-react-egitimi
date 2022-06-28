import React from "react";
import { useIntl } from "react-intl";

function Footer() {
  const intl = useIntl();

  return (
    <div>
      <hr />

      <h3>{intl.formatMessage({ id: "title" })}</h3>

      {/* <FormattedMessage id="new_message" values={{ count: 10 }} /> */}

      <h4>{intl.formatMessage({ id: "new_message" }, { count: 10 })}</h4>

      <div>{intl.formatDisplayName("TRY", { type: "currency" })}</div>
      <div>{intl.formatDisplayName("EUR", { type: "currency" })}</div>
      <div>{intl.formatDisplayName("USD", { type: "currency" })}</div>
      <div>{intl.formatDisplayName("TR", { type: "region" })}</div>
    </div>
  );
}

export default Footer;
