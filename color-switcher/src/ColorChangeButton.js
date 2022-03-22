function ColorChangeButton(bob) {
    return (
        <button className={bob.color} onClick={() => bob.setColor(bob.color)}>
            {bob.color}
        </button>
    );
}

export default ColorChangeButton;
