import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function App() {

	return <SwaggerUI url="https://s3-sa-east-1.amazonaws.com/concilswagger/external_api.yaml" />;
}

export default App;
