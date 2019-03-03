import discord
from discord.ext import commands
from discord.ext.commands import Bot
import asyncio
import os

Token = os.getenv("Token")
bot = commands.Bot(command_prefix="e!")

