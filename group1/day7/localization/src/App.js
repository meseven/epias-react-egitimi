import "./App.css";
import {
  FormattedDate,
  FormattedList,
  FormattedMessage,
  FormattedRelativeTime,
  FormattedTime,
  IntlProvider,
} from "react-intl";
import messages from "./messages";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function App() {
  const [locale, setLocale] = useState(
    localStorage.getItem("locale") || navigator.language
  );

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <select value={locale} onChange={(e) => setLocale(e.target.value)}>
          <option value="tr-TR">tr-TR</option>
          <option value="en-US">en-US</option>
          <option value="de-DE">de-DE</option>
        </select>

        <h1>
          <FormattedMessage id="title" />
        </h1>

        <hr />

        <FormattedDate
          value={new Date(1459832991883)}
          year="numeric"
          month="long"
          day="2-digit"
        />

        <div>
          <FormattedTime value={new Date(1459832991883)} />
        </div>

        <br />
        <br />

        <FormattedRelativeTime
          value={0}
          numeric="auto"
          updateIntervalInSeconds={1}
        />

        <br />
        <br />

        <FormattedList type="conjunction" value={["Me", "myself", "I"]} />

        <br />
        <br />

        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
