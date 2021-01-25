class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {hex: "#ce807f", isLocked: false},                    
                {hex: "#3e1e66", isLocked: false},
                {hex: "#5eff85", isLocked: false},
                {hex: "#e8630c", isLocked: false},
                {hex: "#3a24ff", isLocked: false}
            ]
        }
    }

    _toggleLock(i) {
        //returns a new array to be updated
        let newColors = this.state.colors.map((color, index) => {
            if (i === index) {
                return {
                    ...color,//spreads it out 
                    //spreads it out 
                    // [
                    //    {
                    //  hex: value
                    //  isLocked: true
                    //    }
                    // ]

                    //resets
                    isLocked: !color.isLocked
                }
            } else {
                return color
            }
        })
        this.setState({
            colors: newColors
        });
    }

    _randomize() {
        //returns a new array to be updated
        let newColors = this.state.colors.map(color => {
            if(!color.isLocked){
                console.log('color isnt locked')
                return {
                    ...color, //spreads it out 
                    // [
                    //    {
                    //  hex: value
                    //  isLocked: false
                    //    }
                    // ]
                    hex: '#' + Math.floor(Math.random() * 16777215).toString(16) //toString(16) converts the numbers into Hex.
                }                                                                //Can also do binary and others
            } else {
                console.log('color is locked')
                return color
            }
        })  
        console.log(newColors, ': new state'),
        //sets the state of the colors
        this.setState({
            colors: newColors
        });
    }

    render() {
        console.log(this.state)
        //Maps over the colors and set them equal to colorBoxes
        let colorBoxes = this.state.colors.map((color, i) =>
        <Color color={color} key={i} toggle={() => this._toggleLock(i)}/>)
        return [
            <div className="bg-dark text-center">
                <header className="text-center bg-dark fixed-top text-primary">
                    <h1>Welcome to The Color Palate Generator</h1>
                </header>
                <div className="w-100" style={{height: "100vh", display: "flex"}}>
                    {colorBoxes}
                </div>
                {/* calls _randomize()*/}
                <button onClick={() => this._randomize()} className="btn btn-primary m-1">RANDOMIZE COLORS</button>
            </div>
        ]
    }
}