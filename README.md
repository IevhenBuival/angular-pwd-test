# Application to test password strength

In application we have field for entering a password, under the field there are 3 sections which are showing the strength of the password;
Changes in password strength must take place in real time;
How to calculate the strength of a password:
Only letters/digits/symbols - the password is easy;
Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
Has letters, symbols and numbers - the password is strong;
The color of the sections will depend on the strength of the password:
If the field is empty, all sections are gray;
If the field has less than 8 characters, all sections are red;
If the password is easy - the first section is red the rest are gray;
If the password is medium - the first two sections are yellow the last one is gray;
If the password is strong, all sections are green;

link: https://ievhenbuival.github.io/angular-pwd-test/
