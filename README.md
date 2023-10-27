#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    srand(time(NULL));
    int numberToGuess = rand() % 100 + 1;
    int guess;
    int tries = 0;

    cout << "Welcome to the Guessing Game!" << endl;
    cout << "I'm thinking of a number between 1 and 100. Can you guess it?" << endl;

    do {
        cout << "Enter your guess: ";
        cin >> guess;
        tries++;

        if (guess > numberToGuess) {
            cout << "Too high! Try again." << endl;
        } else if (guess < numberToGuess) {
            cout << "Too low! Try again." << endl;
        } else {
            cout << "Congratulations! You guessed the number in " << tries << " tries." << endl;
        }
    } while (guess != numberToGuess);

    return 0;
}
