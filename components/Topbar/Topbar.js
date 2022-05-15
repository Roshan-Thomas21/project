import React from 'react'
import TopBar from "@duik/top-bar";
import Button from '@duik/button';
import TopBarSection from "@duik/top-bar-section";
import TopBarTitle from "@duik/top-bar-title";


import "@duik/it/dist/styles.css";
<link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,500&display=swap" rel="stylesheet"></link>

function Topbar() {
  return (
    <div>
      <TopBar>
        <TopBarSection>
          <TopBarTitle>
            <h1 style={{ color: "rgb(22,98,207)" }}>Aspire</h1>
          </TopBarTitle>
        </TopBarSection>
        <TopBarSection>
          <Button primary>Logout</Button>
        </TopBarSection>
      </TopBar>
    </div>
  );
}

export default Topbar