public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(input);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String str) {
        // Create an array to store the presence of each letter (a to z)
        boolean[] letterPresent = new boolean[26];

        // Convert the input string to lowercase for case-insensitive comparison
        str = str.toLowerCase();

        // Iterate through the string characters
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);

            // Check if the character is a lowercase letter
            if ('a' <= c && c <= 'z') {
                // Set the corresponding letter's presence to true
                letterPresent[c - 'a'] = true;
            }
        }

        // Check if all letters (a to z) are present in the array
        for (boolean isPresent : letterPresent) {
            if (!isPresent) {
                return false;
            }
        }

        return true;
    }
}
