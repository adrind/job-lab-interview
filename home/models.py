from __future__ import absolute_import, unicode_literals

from django.db import models

from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore import blocks
from wagtail.wagtailadmin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.wagtailcore.fields import StreamField


class HomePage(Page):
    def first_question(self):
        return self.get_children().live().first()


class AnswerBlock(blocks.StructBlock):
    answer = blocks.CharBlock(required=True, max_length=510)
    suggestion = blocks.CharBlock(max_length=1120, required=True)
    is_correct = blocks.BooleanBlock(required=False, default=False, help_text='Is this the correct answer to the question?')

    class Meta:
        icon = 'user'

class InterviewQuestion(Page):
    question = models.CharField(max_length=510)
    answers = StreamField([
        ('answers', AnswerBlock())
    ])

    content_panels = Page.content_panels + [
        FieldPanel('question'),
        StreamFieldPanel('answers')
    ]

    def next_question(self):
        return self.get_next_siblings().live().first()




