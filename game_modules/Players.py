"""Class file for Player"""

import random

from game_modules.Pets import *
from game_modules.Foods import *


class Player:
    """Class for Player"""

    # TODO: implement users with identifiers so they can log in and track their stats
    def __init__(self, name="Guest", turn=1, pack=0, team=None, gold=10, shop_pets=None, shop_food=None):
        self.name = name
        self.turn = turn
        self.gold = gold
        self.pack_pets = tuple(_ for _ in Sloth.__subclasses__() if _.__dict__['pack'][pack])
        self.pack_food = tuple(_ for _ in Food.__subclasses__() if _.__dict__['pack'][pack])

        if team is None:
            self.team = [Ant() for _ in range(5)]
        else:
            self.team = team

        if shop_pets is None:
            self.roll_shop_pets()
        else:
            self.shop_pets = shop_pets

        if shop_food is None:
            self.roll_shop_food()
        else:
            self.shop_food = shop_food

    @property
    def pack(self):
        return self.pack_pets + self.pack_food

    @property
    def shop_tier(self):
        return int((self.turn + 1) / 2) if self.turn < 11 else 6

    @property
    def pet_shop_size(self):
        return 5 if self.turn >= 9 else 4 if self.turn >= 5 else 3

    @property
    def food_shop_size(self):
        return 2 if self.turn > 2 else 1

    def roll_shop_pets(self):
        self.shop_pets = [pet() for pet in random.choices(list(filter(lambda p: p.__dict__['tier'] <= self.shop_tier, self.pack_pets)), k=self.pet_shop_size)]

    def roll_shop_food(self):
        self.shop_food = [food() for food in random.choices(list(filter(lambda f: f.__dict__['tier'] <= self.shop_tier, self.pack_food)), k=self.food_shop_size)]

    @property
    def to_dict(self):
        return {"name": self.name,
                "turn": self.turn,
                "team": [pet.to_dict for pet in list(filter(None, self.team))],
                "shop": [pet.to_dict for pet in self.shop_pets] +
                        [food.to_dict() for food in self.shop_food]}
