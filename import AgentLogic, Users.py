import AgentLogic, Users
import ConfigHandler
import time
import datetime
from AgentLogic import IGBot
import random
def init(webdriver):
    ConfigHandler.init()
    bot = IGBot()
    try:
        bot.login(webdriver)
    except:
        print("Login Error")
    time.sleep(2)
def delete(webdriver):
    bot = IGBot()
    while True:
        event=random.randint(1,4)
        print("Event: ",event)
        if event == 1:
            bot.like_on_home(webdriver)
        elif event == 2:
            check_followers(webdriver)
        elif event == 3:
            bot.check_hashtag(webdriver)
        elif event == 4:
            bot.interest_circle(webdriver)
        else:
            print(datetime.datetime.now(), ' Sleep for 100-250 sec')
            time.sleep(random.randint(90, 150))
print(datetime.datetime.now(), ' Sleep for 200-350 sec')
        time.sleep(random.randint(200, 350))