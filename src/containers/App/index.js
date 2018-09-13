import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    locale: '',
  };

  render() {
    const langs = JSON.parse('{"ru_RU":{"name":"ru_RU","title":"Русский","selected":false,"shortname":"ru"},"en_US":{"name":"en_US","title":"English","selected":true,"shortname":"en"},"zh_CN":{"name":"zh_CN","title":"中文","selected":false,"shortname":"cn"},"es_ES":{"name":"es_ES","title":"Español","selected":false,"shortname":"es"},"pt_PT":{"name":"pt_PT","title":"Português","selected":false,"shortname":"pt"},"id_ID":{"name":"id_ID","title":"Indonesia","selected":false,"shortname":"id"},"ar_KW":{"name":"ar_KW","title":"العربية","selected":false,"shortname":"ar"},"tr_TR":{"name":"tr_TR","title":"Türk","selected":false,"shortname":"tr"},"it_IT":{"name":"it_IT","title":"Italiano","selected":false,"shortname":"it"},"de_DE":{"name":"de_DE","title":"Deutsch","selected":false,"shortname":"de"},"ko_KO":{"name":"ko_KO","title":"한국어","selected":false,"shortname":"ko"},"fr_FR":{"name":"fr_FR","title":"Français","selected":false,"shortname":"fr"},"sv_SE":{"name":"sv_SE","title":"Svenska","selected":false,"shortname":"se"},"th_TH":{"name":"th_TH","title":"ไทย","selected":false,"shortname":"th"}}');

    return (
      <div className={'Application'}>
        <select name="langs" id="langs" onChange={this.onLocaleChange}>
          {
            Object.keys(langs).map(i => {
              const lang = langs[i];
              return <option key={i} value={lang.name}>{lang.title}</option>;
            })
          }
        </select>
      </div>
    );
  }
}

export default hot(module)(App);
