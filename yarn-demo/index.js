var React = require('react');
var { renderToTerminal, View, Text } =require('react-slate');

renderToTerminal(
<View style={{ margin: '1' }}>
<Text style={{ color: 'ansi-green' }}>Hello world!</Text>
</View>,
    process.stdout
);