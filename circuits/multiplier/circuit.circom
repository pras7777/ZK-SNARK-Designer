pragma circom 2.0.0;

template Circuit () {
    signal input a;
    signal input b;
    signal x;
    signal y;
    signal output q;
    component andGate = AND();
    component notGate = NOT();
    component orGate = OR();
    andGate.a <== a;
    andGate.b <== b;
    notGate.in <== b;
    orGate.c <== andGate.out;
    orGate.d <== notGate.out;
    x <== orGate.out;
    y <== notGate.out;
    q <== orGate.out;
}

template AND() {

    signal input x;
    signal input y;
    signal output out;
    out <== x * y;
}

template NOT() {
    signal input in;
    signal output out;
    out <== 1 + in - 2 * in;
}

template OR() {
    signal input x;
    signal input y;
    signal output out;
    out <== x + y - x * y;
}

component main = Circuit();