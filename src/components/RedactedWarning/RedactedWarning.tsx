import React, { useState } from "react";

import { clearStoredManifest } from "../../services/bungie-api";

import STYLES from "./RedactedWarning.module.scss";

const RedactedWarning = () => {
  const [showMore, setShowMore] = useState(false);
  const [hide, setHide] = useState(false);

  if (hide) {
    return null;
  }

  const redactedMoreLink = (
    <button onClick={() => setShowMore(true)}>(more details)</button>
  );
  const redactedLessLink = (
    <button onClick={() => setShowMore(false)}>(less details)</button>
  );
  const redactedHideLink = (
    <button onClick={() => setHide(true)}>(hide)</button>
  );

  const redactedWarningMessage = showMore ? (
    <div>
      <p>
        Redacted equippable items were found in your character or account
        inventories.
      </p>
      <p>
        Redacted items do not display their power level or item type in the data
        returned by the API, so we can not use them to calculate your
        character's maximum equippable power.
      </p>
      <p>
        These items are usually found within recently added content (raids,
        dungeons) and will be un-redacted soon by Bungie, usually at the next
        weekly reset.
      </p>
      <p>
        There is nothing we can do to make this data visible quicker, sorry!
      </p>
      <p>
        If you believe this to be an error (or your data seems "stuck"), you can
        try deleting and re-downloading your cached Destiny manifest by{" "}
        <button onClick={() => clearStoredManifest()}>
          clicking here to clear it
        </button>
        .
      </p>
      <div className={STYLES.links}>
        {redactedLessLink}
        {redactedHideLink}
      </div>
    </div>
  ) : (
    <>
      Redacted items detected, maximum power displayed might not be accurate!{" "}
      {redactedMoreLink}
    </>
  );

  return <div className={STYLES.redactedWarning}>{redactedWarningMessage}</div>;
};

export default RedactedWarning;
