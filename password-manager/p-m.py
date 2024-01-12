passwords = [[],[],[]]

while True:
    new_password = input('Would you like to enter a new password Y/N: ').lower()
    if new_password == 'y':
        account = input('Account: ')
        username = input('Username: ')
        password = input('Password: ')
        passwords[0].append(account)
        passwords[1].append(username)
        passwords[2].append(password)
    elif new_password == 'n':
        while True:
            accountname =input('Enter the account you want the password of: ')
            accountindex=passwords[0].index(accountname)
            accountusername=passwords[1][accountindex]
            accountpassword=passwords[2][accountindex]
            print(f'Account: {accountname}')
            print(f'Username: {accountusername}')
            print(f'Password: {accountpassword}')
            break
    else:
        print('Program ended')
        break

    
    

print(passwords)